import { mount } from "@vue/test-utils";
import PhoneBookList from "../../src/modules/phone-book/components/phone-book-list.vue";

describe("PhoneBookList", () => {
  it("is empty by default", () => {
    const wrapper = mount(PhoneBookList, {
      propsData: {
        list: [],
      },
    });

    expect(wrapper.props("list")).toBeNull;
  });
});
