export const useResponsiveNavbar = () => {
    const showNavbar = ref(false);
    const toggleNavbar = () => {
        showNavbar.value = !showNavbar.value;
        console.log(showNavbar.value);
    };

    return {
        showNavbar,
        toggleNavbar
    }
}