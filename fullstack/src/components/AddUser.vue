<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
    >
      Add A User
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel2">Add A User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              placeholder="Users Name"
              type="text"
              v-model="model.user.firstName "
            />
            <input
              placeholder="Users Surname"
              type="text"
              v-model="model.user.lastName"
            />
            <input
              placeholder="Age"
              type="text"
              v-model="model.user.userAge"
            />
            <input
              placeholder="Email"
              type="text"
              v-model="model.user.emailAdd"
            />
            <input
              placeholder="Profile Picture"
              type="text"
              v-model="model.user.userProfile"
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
            <button type="button" class="btn" @click="registerUser">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        user: {
            firstName: "",
            lastName: "",
            userAge: "",
            emailAdd : "",
            userProfile: "",
        },
      },
    };
  },
  methods: {
    registerUser() {
      console.log("reached");
      this.$store.dispatch("registerUser", this.model.user);
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
};

</script>

<style scoped>
</style>