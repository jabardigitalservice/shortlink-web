import useVuelidate from "@vuelidate/core";

export default function (rules, fields) {
  const validator = useVuelidate(rules, fields);

  return {
    validator: validator.value,
    getError: (field) => {
      const messages = [];
      const path = validator.value[field] || null;
      for (const error of path?.$errors || []) {
        messages.push(error.$message);
      }

      return messages;
    },
    reset: () => {
      validator.value.$reset();
    },
  };
}
