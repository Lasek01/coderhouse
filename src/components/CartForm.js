import React, {useState} from 'react'

const CartForm = ({handleSubmit}) => {
    const [buyer, setBuyer] = useState({
        nombre: '',
        cel: '',
        email: ''
    })

    const handleInput = (event) => {
        const target = event.target;
        const value = target.value;
        const nameInp = target.name;

        setBuyer({...buyer, [nameInp]: value})
    }

    const validateForm = () => {
        const nameFormat = /^([a-zA-Z]{2,15}\s[a-zA-Z]{1,}\s?'?-?[a-zA-Z]{2,})/
        const telFormat = /^[0-9]{8,11}$/
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(buyer.nombre.match(nameFormat) && buyer.cel.match(telFormat) && buyer.email.match(mailFormat)){
            return false
        }else{
            return true
        }

        // let formIsInvalid = Object.keys(buyer)
        // .find( (field) => buyer[field] === "" )
        // return formIsInvalid
    }

    const handleForm = (evt) => {
        evt.preventDefault();
        handleSubmit(buyer);
    }

    return (
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-center text-gray-900 text-xl mb-2 font-medium title-font">Ingrese sus datos para terminar la compra</h2>
            
            <form>
                <div>
                    <label htmlFor='nombre' className="leading-7 text-sm text-gray-600">Nombre y Apellido</label>
                    <input onChange={evt => handleInput(evt)} maxLength='30' value={buyer.nombre} type='text' name='nombre' placeholder='e.g. Gabriel Diaz' className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div>
                    <label htmlFor='cel' className="leading-7 text-sm text-gray-600">Teléfono/Celular</label>
                    <input onChange={evt => handleInput(evt)} maxLength='11' value={buyer.cel} type='text' name='cel' placeholder='mínimo: 8 números' className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div>
                    <label htmlFor='email' className="leading-7 text-sm text-gray-600">E-mail</label>
                    <input onChange={evt => handleInput(evt)} maxLength='50' value={buyer.email} type='text' name='email' placeholder='e.g. coder@house.com' className="w-full bg-white rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
                <div>
                    <button disabled={validateForm()} onClick={evt => handleForm(evt)} className="disabled:opacity-75 disabled:hover:bg-teal-500 text-white flex m-auto bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg mt-5">Finalizar compra</button>
                </div>
            </form>
        </div>
    )
}

export default CartForm