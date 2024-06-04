const reclamosModel = {

    async getAllClaims(){
        const url = 'http://localhost:4000/tours'
        const peticion = await fetch(url)
        const claims = await peticion.json()

        return claims
    }

    ,

    async getClaimById(){
        
    }

    ,

    async createClaimModel (newClaim){

    }

    ,

    async deleteClaim(claimId){

    }

    ,

    async updateClaimModel(ClaimId,dataClaim){

    }

}

export default reclamosModel
