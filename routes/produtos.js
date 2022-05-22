const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    res.status(200).send({
        mensagem: 'Usando um GET dentro da rota de produtos'
    })

})

router.post('/', (req, res, next) => {

    res.status(201).send({

        mensagem: 'Usando POST dentro da rota de produtos'

    })

})


router.get('/:id_produto', (req, res, next) => {

    const id = req.params.id_produto

    if (id == 'especial') {
        res.status(200).send({
    
            mensagem: 'Você descobriu o ID especial',
            id
    
        })
    } else {

        res.status(200).send({

            mensagem: 'Você passou um ID'

        })

    }
})

router.patch('/', (req, res, next) => {
    res.status(201).send({

        mensagem: 'Usando o PATCH dentro da rota de produtos'

    })
})

router.delete('/', (req, res, next) => {

    res.status(201).send({

        mensagem: 'Usando o DELETE dentro da rota de produtos'

    })

})

module.exports = router