import React, {useState , useEffect} from 'react'

// funcao 
function Api() {
  
    //armazenar dados
    const [ repositorio, setRepositorio] = useState([])

    //pega dados
    useEffect(() => {
        pegaDados()
    }, [])
    
   //funcao para obter dados da API
   const pegaDados = async () => {

        // obtem os dados da API 
        // fetch para fazer a requisicao da API
        const dadosRepo = await fetch ('https://api.github.com/users/FreitasGabriel/repos')

        //converte os dados para json
        const coverter = await dadosRepo.json();

        setRepositorio(coverter)

   }

   return(
        <div>
            <ul style={{ textAlign: "left"}}>
            {/* obejto para retornar titulo do repositorio */}
                {repositorio.map(titulo => (<li key={titulo.id}>{titulo.name}</li>))}
            </ul>
        </div>
   )

}

export default Api