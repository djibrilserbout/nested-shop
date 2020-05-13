# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

Product.create(
    {
        name: 'Iphone 11',
        description: 'Télephone de ouf mon gars',
        price: 1000,
        quantity: 25,
        category:"Phone",
        img: "https://images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png"
    })

Product.create({
    name: 'Huawei P20',
    description: 'La réference de Huawei à son meilleur prix',
    price: 400,
    quantity: 25,
    category:"Phone",
    img:"https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/huawei-p20.png?resize=580,580"
})

Product.create({
    name: 'Xioami Mi Band',
    description: 'Le meilleur rapport qualité / prix',
    price: 200,
    quantity: 25,
    category:"Gadget",
    img:"https://i01.appmifile.com/webfile/globalimg/fr/band4.png"

})
Product.create({
    name: 'PS4 1To - Blanc',
    description: 'Jouez  avec vos amis avec Playstation',
    price: 300,
    quantity: 25,
    category:"Console",
    img:"https://www.numerama.com/content/uploads/2017/01/ps4-slim-blanche-1.png"

})
Product.create({
    name: 'Drone DJI',
    description: 'Pour filmez vos escapades partout dans le monde',
    price: 250,
    quantity: 25,
    category:"Gadget",
    img:"https://www5.djicdn.com/cms_uploads/product_comparison/cover/61/small_67c1a9ced2eae762777d70e02fd40155@2x.png"
})

Product.create({
    name: 'Apple AirPods Pro',
    description: 'Réduction active du bruit pour un son profondément immersif',
    price: 260,
    quantity: 100,
    category:"Music",
    img:"https://images.frandroid.com/wp-content/uploads/2019/12/apple-airpods-pro-frandroid.png"
})

Product.create({
    name: 'SanDisk Carte Mémoire 128 GB',
    description: 'Les cartes microSDHC et microSDXC SanDisk Ultra sont rapides pour la réalisation de meilleures photos, des performances applicatives optimales et de la vidéo Full HD.',
    price: 27.50,
    quantity: 25,
    category:"Gadget",
    img:"https://atf-concept.com/169-large_default/Carte-Memoire-128Go-SANDISK-ULTRA-MicroSD.jpg"
})


Product.create({
    name: 'Projecteur AK-80 QKK ',
    description: 'Ce modèle de vidéoprojecteur QKK est doté de la dernière technique LCD 5.0 et offre une qualité d’image claire Full HD',
    price: 109.99,
    quantity: 4,
    category:"Gadget",
    img:"https://images-na.ssl-images-amazon.com/images/I/61sFjnzg9SL._AC_SL1000_.jpg"
})


Product.create({
    name: 'Fujifilm X-T4 Appareil Photo numérique ',
    description: 'Le X-T4 conjugue tous les superlatifs de la série X, offrant les performances les plus abouties tant en photographie qu’en vidéo.',
    price: 1799,
    quantity: 12,
    category:"Photo",
    img:"https://www.fujifilm.eu/fileadmin/content/digitalcamera/x-series/xe2.png"

})


Product.create({
    name: 'Câble HDMI 4K 2m',
    description: 'Snowkids High Speed Câble HDMI prend en charge 4K @ 60Hz (3840 X 2160 @ 60Hz), HDR, HDMI 2.0.',
    price: 10.99,
    quantity: 45,
    category:"Gadget",
    img:"https://cdn-reichelt.de/bilder/web/xxl_ws/F110/PURELINK_FX-I350-02.png"
})


Product.create({
    name: 'Amazon Echo (3ème génération)',
    description: 'Contrôlez votre maison connectée par la voix. Allumez la lumière avant de sortir du lit, allumez la cafetière avant même d\'entrer dans la cuisine ou tamisez les lumières depuis votre canapé pour regarder un film.',
    price: 99.99,
    quantity: 100,
    category:"Gadget",
    img:"https://images.frandroid.com/wp-content/uploads/2019/04/amazon-echo-plus-2018.png"
})


puts("Products created successfully !")