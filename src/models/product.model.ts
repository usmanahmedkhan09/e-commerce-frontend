class GeneralFeatures
{
    releaseDate: string | undefined
    simSupport: string | undefined
    dimensions: string | undefined
    weight: string | undefined
    opertaingSystem: string | undefined
    waterproof: boolean | undefined
    wearingType: string | undefined
    volumeControl: string | undefined
}

class Display
{
    size: string | undefined
    resolution: string | undefined
    type: string | undefined
    protection: string | undefined
}

class Memory
{

    internal: string | undefined
    ram: string | undefined
    card: Boolean = true
}


class Performance
{
    processor: string | undefined
}

class Battery
{
    type: string | undefined
    chargingTime: string | undefined
    playTime: string | undefined
    capacityforbuds: string | undefined
    capacityforcase: string | undefined
}

class Camera
{
    frontCamera: string | undefined
    backCamera: string | undefined
    frontflashlight: Boolean | undefined
    backflashlight: Boolean | undefined
    frontvideorecording: string | undefined
    backvideorecording: string | undefined

}

class Connectivity
{
    bluetooth: Boolean = false
    _3g: Boolean = false
    _4GLTE: Boolean = false
    _5G: Boolean = true
    radio: Boolean = true
    wifi: Boolean = true
    NFC: Boolean = true
    bluetoothVersion: string | undefined
    bluetoothRange: string | undefined
    microPhone: string | undefined
}
class Product
{
    _id?: string | undefined
    name: string | undefined
    productImages: any[] = []
    price: number | undefined
    discount: number | undefined
    description: string | undefined
    quantity: number | undefined
    model: string | undefined
    categoryId: string | undefined
    brandId: string | undefined
    seriesId: string | undefined
    productId?: string | undefined
    generalFeatures: GeneralFeatures = new GeneralFeatures()
    display: Display = new Display()
    memory: Memory = new Memory()
    performance: Performance = new Performance()
    battery: Battery = new Battery()
    camera: Camera = new Camera()
    connectivity: Connectivity = new Connectivity()

}



class ProductFilters
{
    count: number = 50
    sort: number = 1
    brand: string[] = []
}

export { Product, ProductFilters }