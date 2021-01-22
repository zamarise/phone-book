<template>
  <div id="phone-book-add-number">
    <el-row
      :gutter="17"
      type="flex"
      justify="space-around"
    >
      <el-col
        :xs="20"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="9"
      >
        <el-card class="box-card">
          <h2>Add a Phone Number</h2>
          <el-form :model="form">
            <el-col
              :xs="24"
              :md="24"
              :lg="8"
              :xl="8"
            >
              <el-form-item label="First name">
                <el-input
                  v-model.trim="form.firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter a first name"
                />
              </el-form-item>
            </el-col>

            <el-col
              :xs="24"
              :md="24"
              :lg="8"
            >
              <el-form-item label="Last name">
                <el-input
                  v-model.trim="form.lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter a last name"
                />
              </el-form-item>
            </el-col>

            <el-col
              :xs="24"
              :md="24"
              :lg="8"
            >
              <el-form-item label="Phone Number">
                <el-input
                  v-model.trim="form.phoneNumber"
                  v-mask="'(###) ###-####'"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter a phone number"
                />
              </el-form-item>
            </el-col>

            <el-col>
              <el-form-item>
                <el-button
                  size="medium"
                  type="primary"
                  class="add-button"
                  :disabled="disableButton"
                  @click.prevent="onSubmit"
                >
                  Add
                </el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PhoneBookAddNumber",

  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        fullName: "",
        phoneNumber: "",
      },
    };
  },

  computed: {
    getFullName() {
      return `${this.form.firstName} ${this.form.lastName}`;
    },

    disableButton() {
      return (
        this.isEmpty(this.form) ||
        this.isPhoneLengthTooShort(this.form.phoneNumber)
      );
    },
  },

  watch: {
    form: {
      deep: true,
      handler() {
        this.form.fullName = this.getFullName;
      },
    },
  },

  methods: {
    onSubmit() {
      try {
        this.handleAddNumber(this.form);
        this.showFeedback(
          "success",
          "Phone number has been successfully added."
        );
      } catch (error) {
        console.error(error);
        this.showFeedback("error", `Uh oh, ${error.message}`);
      } finally {
        setTimeout(() => this.resetForm(this.form));
      }
    },

    handleAddNumber(phoneForm) {
      if (!phoneForm || this.isEmpty(phoneForm)) {
        console.error("No phone book item to add.");
        throw new Error("something went wrong.");
      }

      this.$emit("add-phone-entry", phoneForm);
    },

    resetForm(phoneForm) {
      Object.keys(phoneForm).map((key) => {
        phoneForm[key] = "";
      });
    },

    showFeedback(type, message) {
      this.$message({
        message: message,
        type: type,
        showClose: true,
        center: true,
      });
    },

    isEmpty(form) {
      return !Object.values(form).every((value) => {
        return value !== null && value !== "";
      });
    },

    isPhoneLengthTooShort(phoneNumber) {
      if (!phoneNumber) {
        return true;
      }

      return phoneNumber.length < 14;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 24px;
  line-height: 24px;
  color: #393e46;
}

.add-button {
  float: right;
}
</style>

<style>
.el-message__content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
