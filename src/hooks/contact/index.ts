import type { Contact } from "@/types/contact"
import axios from "axios"
import { useMutation } from "react-query"

const useCreateContact = () => useMutation((data: Contact) => {
  return axios.post('/api/contact', data);
});

export default useCreateContact;