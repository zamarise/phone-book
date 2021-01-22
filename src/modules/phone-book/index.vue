<template>
  <div id="phone-book">
    <header>
      <h1>Phone Book</h1>
    </header>

    <main class="phone-book-main">
      <PhoneBookAddNumber
        :list="list"
        @add-phone-entry="onAddPhoneEntry"
      />
      <PhoneBookList
        :list="list"
        @delete-phone-entry="onDeletePhoneEntry"
      />
    </main>

    <footer>
      <el-row
        type="flex"
        justify="end"
      >
        Contact: z@zamarise.com
      </el-row>
    </footer>
  </div>
</template>

<script>
import PhoneBookAddNumber from "./components/phone-book-add-number";
import PhoneBookList from "./components/phone-book-list";

export default {
  components: {
    PhoneBookAddNumber,
    PhoneBookList,
  },

  data() {
    return {
      list: [],
    };
  },

  methods: {
    onAddPhoneEntry(phoneEntry) {
      if (!phoneEntry) {
        return;
      }

      this.list = [...this.list, { ...phoneEntry }];
    },

    onDeletePhoneEntry(entryIndex) {
      if (entryIndex === undefined || entryIndex === null) {
        return;
      }

      this.list = this.list.filter((item, index) => index !== entryIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
#phone-book {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  h1 {
    color: #f53251;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    margin: 50px;
  }

  .el-row {
    margin: 20px 0;
  }

  .phone-book-main {
    flex: 1;
  }

  .box-card {
    margin-top: 50px;
  }
}
</style>
