<template>
  <div id="phone-book-list">
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
          <h2>Phone Number List</h2>
          <el-table
            :data="list"
            style="width: 100%"
            empty-text="No phone numbers"
            stripe
          >
            <el-table-column
              prop="fullName"
              label="Name"
            />

            <el-table-column
              prop="phoneNumber"
              label="Phone Number"
              width="200"
            />

            <el-table-column
              fixed="right"
              label="Operations"
              width="100"
            >
              <template slot-scope="scope">
                <el-popconfirm
                  placement="top"
                  width="200"
                  icon="el-icon-info"
                  icon-color="red"
                  confirm-button-text="OK"
                  cancel-button-text="No, Thanks"
                  title="Are you sure you want to delete this phone number?"
                  @confirm="deleteRow(scope.$index)"
                >
                  <el-button
                    slot="reference"
                    size="mini"
                  >
                    Delete
                  </el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PhoneBookNumbersList",

  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteRow(index) {
      this.$emit("delete-phone-entry", index);
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

.box-card {
  margin-top: 50px;
}
</style>

<style>
.el-popconfirm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 10px 0px 8px 0px;
  word-break: break-word;
}
</style>
