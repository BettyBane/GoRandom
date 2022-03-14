
export const state = () => ({
    countries: {},
    num1: 0,
})

export const getters = {

}

export const actions = {
    RandomizeCode({commit}) {
        const num1 = Math.floor(Math.random() * 250);
        commit("RandomizeCode", num1);
        return num1;
    },
    async getSth({commit}, i){
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
        const countries = data.data.countries[i];
        commit("getSth", countries);
        return countries;
    },
}


export const mutations = {
    getSth(state, countries) {
        state.countries = {...countries};
    },
    RandomizeCode(state, num1) {
        state.num1 = num1;
    }
}