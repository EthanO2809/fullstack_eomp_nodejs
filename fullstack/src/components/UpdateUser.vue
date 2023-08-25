<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      @click="openEditModal(user.UserID)"
      data-bs-toggle="modal"
      :data-bs-target="'#pexampleModal' + user.UserID"
    >
      Update
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'pexampleModal' + user.UserID"
      tabindex="-1"
      :aria-labelledby="'pexampleModalLabel' + user.UserID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="pexampleModalLabel3">
              Update Products
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              placeholder="First Name"
              type="text"
              v-model="userData.firstName"
              required
            />
            <input
              placeholder="Last Name"
              type="text"
              v-model="userData.lastName"
              required
            />
            <input
              placeholder="Age"
              type="number"
              v-model="userData.userAge"
              required
            />
            <input
              placeholder="Gender"
              type="text"
              v-model="userData.Gender"
              required
            />
            <input
              placeholder="Role"
              type="text"
              v-model="userData.userRole"
              required
            />
            <input
              placeholder="Email Address"
              type="text"
              v-model="userData.emailAdd"
              required
            />
            <input
              placeholder="User Image"
              type="text"
              v-model="userData.userProfile"
              required
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="updateUser(userData)"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: ["user"],
  data() {
    return {
        userData: {
            UserID: this.$route.params.id,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            userAge: this.user.userAge,
            Gender: this.user.Gender,
            userRole: this.user.userRole,
            emailAdd: this.user.emailAdd,
            userProfile: this.user.userProfile,
        }
    };
  },
  computed: {
    thisUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    openEditModal(id) {
      this.userData.UserID = id;
      this.userData = {
        ...this.$store.state.users.find((user) => user.UserID === id),
      };
    },
    updateUser(user) {
        console.log(user);
      this.$store
        .dispatch("updateUser", user)
        .then(() => {
          console.log("product successfully updated");
        })
        .catch((err) => {
          console.error("Error while updating: ", err);
        });
    },
  },
};
</script>
  
  <style scoped>
</style>