import barba from '@barba/core'
import barbaCss from '@barba/css'



barba.use(barbaCss)

export default barba.init({
    transition: [
        {

            once(){}
        }

    ]
})