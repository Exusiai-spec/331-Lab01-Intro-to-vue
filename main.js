const { createApp, ref,computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const producurl = ref('http://www.camt.cmu.ac.th')
        // const image = ref('./assets/images/socks_green.jpg')
        // const inStock = ref(true)
        const inventory  = ref(100)
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
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity: 0 }
                   ])
        const selectedVariant = ref(0)
        const cart = ref(0)      
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
            })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
            })
                              
        function addToCart() {
            cart.value +=1
            }
        const title = computed(() =>{
            return brand.value + ' ' + product.value
            })
                
        function updateImage(variantImage){
            image.value = variantImage
        }         
        function updateVariant(index){
            selectedVariant.value = index;
            }
            
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
            updateImage
        }
    }
  
}).mount('#app')
