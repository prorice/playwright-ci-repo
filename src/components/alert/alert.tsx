import Swal, { SweetAlertOptions } from 'sweetalert2';

export const Alert = async (props: SweetAlertOptions) => {
  return Swal.fire(props);
};
