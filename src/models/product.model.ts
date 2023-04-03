class GeneralFeatures
{
    releaseDate: String | undefined
    simSupport: String | undefined
    dimensions: string | undefined
    weight: string | undefined
    opertaingSystem: string | undefined
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
    processor: String | undefined
}

class Battery
{
    type: string | undefined
}

class Camera
{
    frontCamera: string | undefined
    backCamera: string | undefined
    frontflashlight: Boolean = false
    backflashlight: Boolean = false
    frontvideorecording: string | undefined
    backvideorecording: string | undefined

}

class Connectivity
{
    bluetooth: Boolean = false
    '3g': Boolean = false
    '4G/LTE': Boolean = false
    '5G': Boolean = true
    radio: Boolean = true
    wifi: Boolean = true
    NFC: Boolean = true
}
class Product
{
    _id?: string | undefined
    name: string | undefined
    productImages: any[] = []
    price: number | undefined
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

export default Product