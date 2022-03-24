
export const state = () => ({
    country: null,
    randNum: 0,
})

export const getters = {

}

export const actions = {
    getRandNum({commit}) {
        const randNum = Math.floor(Math.random() * 250);
        commit("getRandNum", randNum);
        return randNum;
    },
    async getCountry({commit}, i){
        const {data} = await this.$axios.post('https://countries.trevorblades.com/graphql',
            {
                query: `
                    query Query {
                        countries {
                            code
                            name
                            native
                            phone
                            continent {
                                name
                                }
                            currency
                            languages {
                                code
                                name
                                native
                                }
                            emoji
                            emojiU
                        }
                        }`
            }
        );
        const country = data.data.countries[i];
        commit("getCountry", country);
        return country;
    },
}


export const mutations = {
    getCountry(state, country) {
        state.country = {...country};
    },
    getRandNum(state, randNum) {
        state.randNum = randNum;
    }
}