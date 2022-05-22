const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

    res.status(200).send({
        mensagem: 'Retorna os Pedidos'
    })

})

router.post('/', (req, res, next) => {

    res.status(201).send({

        mensagem: 'O Pedido foi criado'

    })

})


router.get('/:id_pedido', (req, res, next) => {

    const id = req.params.id_pedido

    if (id == 'especial') {
        res.status(200).send({
    
            mensagem: 'Detalhes do Pedido',
            id_pedido: id
    
        })
    } else {

        res.status(200).send({

            mensagem: 'Você passou um ID'

        })

    }
})

router.patch('/', (req, res, next) => {

    res.status(201).send({

        mensagem: 'Pedido alterado'

    })

})

router.delete('/', (req, res, next) => {

    res.status(201).send({

        mensagem: 'Pedido excluído'

    })

})

module.exports = router