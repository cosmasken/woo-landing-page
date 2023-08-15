<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import BackgroundGradient from './assets/bg_gradient.svg'
  import Logo from './assets/logo.svg'
  import Vector from './assets/vector.svg'
  import SearchIcon from './assets/icon-search.svg'
  import FeaturedImage from './assets/featured-image.svg'
</script>

<main>
    <div class="bg-[url(./assets/bg-gradient.svg)] ">

        <div class="flex flex-row justify-between w-full px-[55px] pt-[45px]">
            <div class="flex flex-row space-x-[144px] items-center">
                <img src={Logo} class="navlogo" alt="Vite Logo" />
                <nav >
                    <ul class="space-x-[38px]  flex flex-row items-center justify-center">
                        <li>
                            <p class="text-primary text-[18px] font-medium">
                                Sell
                            </p>

                        </li>
                        <li>
                            <p class="text-primary text-[18px] font-medium">
                                Marketplace
                            </p>

                        </li>
                        <li>
                            <p class="text-primary text-[18px] font-medium">
                                Community
                            </p>

                        </li>
                        <li>
                            <p class="text-primary text-[18px] font-medium">
                                Develop
                            </p>
                        </li>
                        <li>
                            <p class="text-primary text-[18px] font-medium">
                                Resources
                            </p>

                        </li>
                    </ul>

                </nav>
            </div>
            <div class="flex flex-row items-center space-x-[38px]">
                <p class="text-primary text-[18px] font-medium">
                    Login
                </p>
                <button class="rounded-md items-center  bg-purple px-[14px] py-[13px] text-white">
                    Get Started
                </button>
                <img src={SearchIcon} class="search" alt="Vite Logo" />
            </div>
        </div>

        <div class="lg:pt-[199px] lg:pl-[220px] flex flex-row">
            <div class="flex-1">
                <p  class="text-6xl text-primary font-bold">
                    Building exactly the eCommerce website you want.
                </p>
                <p class="pt-[29px] text-[#94A2B3] text-[18px]">
                    WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
                    Get started quickly and make your way.
                </p>
                <div class="pt-[31px] flex flex-row items-center">
                  <button class="rounded-full bg-purple py-[26px] px-[62px] text-white">
                    Start a new store
                  </button>

                    <p class=" text-[#94A2B3] text-[18px]">
                        or
                        <span class="text-[#299EF3] font-bold">
                        or  Customize & Extend ›
                        </span>
                    </p>
                </div>
            </div>
            <div class="flex-1">
                <img src={FeaturedImage} class="featured" alt="FeaturedImage" />
            </div>

        </div>

        <div class="mx-auto">
            <p class="text-primary font-bold text-5xl text-center ">
            Your ecommerce<br>
                made simple
            </p>
        </div>
    </div>



</main>

<style lang="postcss">
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .navlogo {
      height: 34px;
  }
  .featured{
      flex-shrink: 0;
      top: 0;
      right: 0;
  }
  .search{
      height: 16px;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

</style>
