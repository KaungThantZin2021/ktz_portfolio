<template>
    <div>
        <footer class="">
            <div class="mx-auto max-w-7xl">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <div class="flex space-x-5">
                                <a 
                                    href="https://github.com/KaungThantZin2021"
                                    target="_blank"          
                                    class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                                >
                                    <IconsGitHub/>
                                </a>

                                <a 
                                    href="https://www.linkedin.com/in/kaungthantzin2022"
                                    target="_blank"          
                                    class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                                >
                                    <IconsLinkedin/>
                                </a>

                                <a 
                                    href="https://www.facebook.com/profile.php?id=100072869688526"
                                    target="_blank"          
                                    class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                                >
                                    <IconsFacebook/>
                                </a>

                                <a 
                                    href="https://www.instagram.com/kaungthantzin409/"
                                    target="_blank"          
                                    class=" text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                                >
                                    <IconsInstagram/>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-10">
                                <p class="text-sm font-medium">
                                    Developed by 
                                    <a 
                                        href="https://github.com/KaungThantZin2021"
                                        target="_blank"          
                                        class="text-sm font-medium underline"
                                    >
                                        Kaung Thant Zin
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const route = useRoute();
</script>
