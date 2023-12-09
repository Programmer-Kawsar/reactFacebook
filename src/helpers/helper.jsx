import { toast } from "react-toastify";

export const createToastify = (message, type) => {
  return toast[type](message);
};

export const isValidmobile = (mobile) => {
  const mobilePatern = /^(01|8801|\+8801)[0-9]{9}$/;
  return mobilePatern.test(mobile);
};

/**
 * Validate Email
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  return emailPattern.test(email);
};
