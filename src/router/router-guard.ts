import storageService from "@/services/storage.service";


function routerGuard(router: any)
{
    router.beforeEach((to: any, from: any, next: any) =>
    {

        if (to.matched.some((record: any) => record.meta.layout == 'public'))
        {
            let token = storageService.getProperty('token');
            if (!token)
            {
                next()
                return true;
            }
            next(false);
            return false;
        } else if (to.matched.some((record: any) => record.meta.requireAuth))
        {
            let token = storageService.getProperty('token');
            console.log(token);
            if (token)
            {
                next()
                return true;
            }
            next('/login')
            return false;
        } else
        {
            next('/login')
            return false
        }
        next()

    })

}

export default routerGuard