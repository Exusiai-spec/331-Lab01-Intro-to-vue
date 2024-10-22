const { createApp, ref, computed } = Vue

createApp({
    setup() {
        const product = ref('Boots')
        const brand = ref('SE 331')
        const producurl = ref('http://www.camt.cmu.ac.th')
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton', 
            '30% wool', 
            '20% polyester'
        ])
        const size = ref([
            'L',
            'M',
            'S'
            ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0)
        const cart = ref(0)

        // 计算属性
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        const saleMessage = computed(() => {
            if(onSale.value){
                return `${brand.value} ${product.value} is on sale`;
            }
            return '';
        })
        // 方法
        function addToCart() {
            cart.value += 1
        }

        function updateImage(variantImage) {
            image.value = variantImage
        }

        function updateVariant(index) {
            selectedVariant.value = index
        }

        // 调试信息
        console.log('Methods:', { addToCart, updateImage, updateVariant });

        return {
            title,
            producurl,
            image,
            inStock,
            inventory,
            details,
            size,
            variants,
            cart,
            addToCart,
            updateImage,
            updateVariant,
            onSale,
            saleMessage
        }
    }
}).mount('#app')