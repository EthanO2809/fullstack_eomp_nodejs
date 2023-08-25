<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#pexampleModal2"
    >
      Add A User
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="pexampleModal2"
      tabindex="-1"
      aria-labelledby="pexampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="pexampleModalLabel2">Add A User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <center>
            <input
              placeholder="Name"
              type="text"
              v-model="model.user.firstName "
              required
            />
            <input
              placeholder="Surname"
              type="text"
              v-model="model.user.lastName"
              required
            />
            <input
              placeholder="Age"
              type="number"
              v-model="model.user.userAge"
              required
            />
            <input
              placeholder="Gender"
              type="text"
              v-model="model.user.Gender"
              required
            />
            <input
              placeholder="Role"
              type="text"
              v-model="model.user.userRole"
              required
            />
            <input
              placeholder="Role"
              type="text"
              v-model="model.user.userPass"
              required
            />
            <input
              placeholder="Email"
              type="email"
              v-model="model.user.emailAdd"
              required
            />
            <input
              placeholder="Profile Picture"
              type="text"
              v-model="model.user.userProfile"
              required
            />
          </center>

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
            Gender:"",
            userRole:"",
            userPass:"",
            userProfile:"",
            emailAdd : ""
        },
      },
    };
  },
  methods: {
    registerUser() {
      console.log("reached");
      this.$store.dispatch("registerUser", this.model.user);
      console.log("Dispatched registerUser action")
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
};

</script>

<style scoped>
.btn{
  border: 1px solid black;
  margin-bottom: 7px;
}

.btn:hover{
color: rgb(126, 126, 126);
}

input{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
}
</style>