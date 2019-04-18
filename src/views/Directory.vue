<template>
  <div id="directory-content">
      <div class="sidebarLeadership">
        <h3>Ward Leadership</h3>
        <h5>Bishopric</h5>
        <ul class="leadershipGroup">
          <li>Bishop - Scott Birrell</li>
          <li>1<sup>st</sup> Couns. - Keeyan Parker</li>
          <li>2<sup>nd</sup> Couns. - Johnathan Sugihara</li>
        </ul>
        <h5>Relief Society</h5>
        <ul class="leadershipGroup">
          <li>President - Mary Ann Anderson</li>
          <li>1<sup>st</sup> Couns. - Aubrey Knighton</li>
          <li>2<sup>nd</sup> Couns. - Amber Fisher</li>
        </ul>
        <h5>Elders Quorum</h5>
        <ul class="leadershipGroup">
          <li>President - Wes Glissmeyer</li>
          <li>1<sup>st</sup> Couns. - Dan Schindler</li>
          <li>2<sup>nd</sup> Couns. - Sam Woodbury</li>
        </ul>
        <h5>Sunday School</h5>
        <ul class="leadershipGroup">
          <li>President - Jason Stewart</li>
          <li>1<sup>st</sup> Couns. - Kimball Leavitt</li>
          <li>2<sup>nd</sup> Couns. - Derek Steele</li>
        </ul>
      </div>

      <div class="mainDirectory">
        <div class="add" v-if="user">
          <h2>Add a Contact</h2>
          <input v-model="aptNumber" placeholder="Apartment Number">
          <input v-model="firstName" placeholder="Last Name">
          <input v-model="lastName" placeholder="First Name">
          <input v-model="email" placeholder="Email">
          <button @click="add" class="pure-button pure-button-primary">Add Contact</button>
          <br><br>
        </div>
        <h2>Directory</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Apt #</th>
              <th scope="col">Last Name</th>
              <th scope="col">First Name</th>
              <th scope="col">Email</th>
              <th scope="col" v-if="user"> </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts">
              <th scope="row">{{contact.aptNumber}}</th>
              <td>{{contact.lastName}}</td>
              <td>{{contact.firstName}}</td>
              <td>{{contact.email}}</td>
              <td v-if="user"><button v-on:click="deleteContact(contact)" class="pure-button pure-button-primary">X</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'directory',
  data() {
    return {
      aptNumber: "",
      lastName: "",
      firstName: "",
      email: "",
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
    user() {
      return this.$store.state.user;
    }
  },
  async created() {
    await this.$store.dispatch("getContacts");
  },
  methods: {
    async add() {
      try {
        this.error = await this.$store.dispatch("addContact", {
            aptNumber: this.aptNumber,
            lastName: this.lastName,
            firstName: this.firstName,
            email: this.email
        });
        this.aptNumber = "";
        this.lastName = "";
        this.firstName = "";
        this.email = "";
        this.$store.dispatch("getContacts");
      } catch(error) {
        console.log(error);
      }
    },
    async deleteContact(contact) {
      try {
        let response = await this.$store.dispatch("deleteContact", contact._id);
        this.$store.dispatch("getContacts");
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
  ul {list-style-type: none;}
  h1,h3 {color: #8C281F;}
  h2, h4, h5 {color: #F2836B;}

  input {color: #0D0D0D;}

  .pure-button {
    margin: 0px 20px;
    background-color: #8C281F;
    color: #fff;
  }
  /* The sidebar menu */
  .sidebarLeadership {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 250px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    left: 0;
    background-color: #0D0D0D; /* Black */
    color: white;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    padding-left: 10px;
  }

  /* Style page content */
  .mainDirectory {
    margin-left: 250px; /* Same as the width of the sidebar */
    padding: 20px;
    height: 100%;
  }

  /*Style sidebar lists*/
  .leadershipGroup {
    display: block;
    list-style-type: circle;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidebarLeadership {padding-top: 15px; font-size: 18pt;}
    #announcements-sidebar {padding-top: 15px; font-size: 18pt;}
  }

</style>
