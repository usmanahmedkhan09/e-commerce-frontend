import { defineRule } from 'vee-validate'
import { alpha_num } from '@vee-validate/rules';


defineRule('alpha_num', alpha_num);

defineRule('required', (value: string, [name], ctx) =>
{
    if (!value || !value.length)
    {
        return `${ctx.field} field is required`;
    }
    return true;
});


defineRule('email', (value: string,) =>
{
    // Field is empty, should pass
    if (!value || !value.length)
    {
        return true;
    }
    // Check if email
    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
    {
        return `This field must be a valid email`;
    }
    return true;
});

defineRule('minLength', (value: any, [limit]) =>
{
    // The field is empty so it should pass
    if (!value || !value.length)
    {
        return true;
    }
    if (value.length < limit)
    {
        return `Password must be at least ${limit} characters`;
    }
    return true;
});

defineRule('username', (value: any, [limit]) =>
{
    if (value.length < limit)
    {
        return `This username must be at least ${limit} characters`;
    }
    return true
})