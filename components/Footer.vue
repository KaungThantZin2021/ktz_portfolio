<template>
    <div>
        <footer class="fixed lg:bottom-10 md:bottom-5 sm:bottom-8 xs:bottom-8 2xs:bottom-8 lg:left-20 md:left-10 sm:left-10 xs:left-10 2xs:left-10 lg:right-20 md:right-10 sm:right-10 xs:right-10 2xs:right-10 lg:h-16 md:h-16 sm:h-5 xs:h-5 2xs:h-5 lg:flex md:flex sm:block xs:block 2xs:block items-center justify-between">
            <div class="flex flex-shrink-0 items-center sm:justify-center xs:justify-center 2xs:justify-center">
                <div class="flex space-x-5">
                    <a 
                        href="https://github.com/KaungThantZin2021"
                        target="_blank"          
                        class="text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsGitHub/>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/kaungthantzin2022"
                        target="_blank"          
                        class="text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsLinkedin/>
                    </a>

                    <a 
                        href="https://www.facebook.com/profile.php?id=100072869688526"
                        target="_blank"          
                        class="text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsFacebook/>
                    </a>

                    <a 
                        href="https://www.instagram.com/kaungthantzin409/"
                        target="_blank"          
                        class="text-2xl font-medium transition ease-in-out duration-300 hover:scale-150"
                    >
                        <IconsInstagram/>
                    </a>

                </div>
            </div>
            <div class="flex items-center sm:justify-center xs:justify-center 2xs:justify-center sm:my-1 xs:my-1 2xs:my-1">
                <p class="lg:text-sm md:text-sm sm:text-xs xs:text-xs 2xs:text-xs font-normal">
                    Developed by 
                    <a 
                        href="https://github.com/KaungThantZin2021"
                        target="_blank"          
                        class="underline"
                    >
                        Kaung Thant Zin
                    </a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
const route = useRoute();
</script>
