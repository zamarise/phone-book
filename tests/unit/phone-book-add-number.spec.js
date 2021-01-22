import PhoneBookAddNumber from "../../src/modules/phone-book/components/phone-book-add-number.vue";
import { mount } from "@vue/test-utils";

describe("PhoneBookAddNumber", () => {
  it("has a submit button", () => {
    const wrapper = mount(PhoneBookAddNumber, {
      propsData: {
        list: [],
      },
    });

    expect(wrapper.get("button"));
  });
  it("disables submit button with empty fields and invalid phone length", () => {
    const wrapper = mount(PhoneBookAddNumber, {
      propsData: {
        list: [],
      },
    });

    wrapper.setData({
      form: {
        firstName: "",
        lastName: "",
        fullName: "",
        phoneNumber: "",
      },
    });

    expect(wrapper.vm.disableButton).toBeTruthy();
  });
  it("enables submit button with non-empty fields and valid phone length", () => {
    const wrapper = mount(PhoneBookAddNumber, {
      propsData: {
        list: [],
      },
    });

    wrapper.setData({
      form: {
        firstName: "Jane",
        lastName: "Doe",
        fullName: "Jane Doe",
        phoneNumber: "(123) 456-7890",
      },
    });

    expect(wrapper.vm.disableButton).toBeFalsy();
  });
  it("sets values of input fields and emits phone book entry on button click", async () => {
    const wrapper = mount(PhoneBookAddNumber, {
      propsData: {
        list: [],
      },
    });

    await wrapper.find("input[name=firstName]").setValue("Jane");
    await wrapper.find("input[name=lastName]").setValue("Doe");
    await wrapper.find("input[name=phoneNumber]").setValue("(123) 456-7890");

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("add-phone-entry");
    expect(wrapper.emitted("add-phone-entry")[0][0]).toStrictEqual({
      firstName: "Jane",
      lastName: "Doe",
      fullName: "Jane Doe",
      phoneNumber: "(123) 456-7890",
    });
  });
});
