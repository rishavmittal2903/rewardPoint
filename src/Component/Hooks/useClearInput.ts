export const ClearInput = (id) => {
    const inputElm: any = document.getElementById(id);
    if (inputElm && inputElm?.value) {
      inputElm.value = "";
    }
};