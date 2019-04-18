import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    contacts: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setContacts(state, contacts) {
      state.contacts = contacts;
    }
  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getContacts(context) {
      try {
        let response = await axios.get("/api/contacts");
        context.commit('setContacts', response.data);
        return "";
      } catch (error) {
        console.log(error);
        return "";
      }
    },
    async addContact(context, data) {
      try {
        await axios.post('/api/contacts', data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteContact(context, id) {
      try {
        await axios.delete('/api/contacts/' + id);
        return "";
      } catch (error) {
        console.log(error);
        return "";
      }
    }
  }
})
