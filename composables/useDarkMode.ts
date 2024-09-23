import { ref, watch, onMounted } from 'vue'

export function useDarkMode() {
    const isDark = ref(false)

    // Check for user preference in localStorage
    const getInitialMode = () => {
        if (process.client) {
            const storedPreference = localStorage.getItem('theme')
            if (storedPreference) {
                return storedPreference === 'dark'
            } else {
                // If no preference, use system preference
                return window.matchMedia('(prefers-color-scheme: dark)').matches
            }
        }
        return false
    }

    onMounted(() => {
        isDark.value = getInitialMode()
        updateDOM()
    })

    const toggleDarkMode = () => {
        isDark.value = !isDark.value
    }

    const updateDOM = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    watch(isDark, () => {
        updateDOM()
    })

    return {
        isDark,
        toggleDarkMode,
    }
}
