<template>
  <div>
    <div class="relative bg-linho overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8 lg:w-full" style="position: fixed; background-color:#FDF8F5; top: 0; right: 0">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
              fixed="top"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0" style=""
              >
                <div class="flex items-center justify-between w-full md:w-auto" style="background-color:transparent">
                  <a href="#" style="background-color:transparent">
                    <span class="sr-only">Dados PET</span>
                    <img
                      alt="Dados PET"
                      class="h-8 w-auto sm:h-10"
                      src="images/logos/logo-dados-pet.png"
                      style="background-color:transparent"
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      id="main-menu"
                      type="button"
                      class="bg-linho rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-perola-negra hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-laranja-internacional transition-colors"
                      aria-haspopup="true"
                      @click="menuOpened = true"
                    >
                      <span class="sr-only">Abrir menu</span>
                      <i class="ri-menu-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="hidden md:block md:ml-10 md:pr-4 md:space-x-3 lg:space-x-8 text-sm"
              >
                
                <a
                  href="https://forms.gle/aRz41wEpAjKrvRHfA"
                  class="font-bold text-laranja-internacional lowercase hover:text-laranja-internacional-dark transition-colors"
                  >Faça parte da comissão!</a
                >

                <a
                  href="#atividades"
                  class="font-bold text-laranja-internacional  lowercase hover:text-laranja-internacional-dark transition-colors"
                  >Nossas Atividades</a
                >
                
                <a
                  href="#acesso-api"
                  class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >acesso aos dados - API</a
                >

                <a
                  href="#aplicacoes"
                  class="font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >Aplicações</a
                >

                <a
                  href="#quem-somos"
                  class="font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >Quem somos</a
                >

                <a
                  href="#perguntas-frequentes"
                  class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >FAQ</a
                >

                <a
                  href="#contato"
                  class="font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors"
                  >Contato</a
                >
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="menuOpened"
              class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              style="position: fixed; background-color:#FDF8F5; top: 0;"
            >
              <div
                class="rounded-lg shadow-md bg-linho ring-1 ring-perola-negra ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      alt=""
                      class="h-8 w-auto"
                      src="images/logos/logo-dados-pet.png"
                      style="background-color:rgba(0,0,0,0)"
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="bg-linho rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-perola-negra hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-laranja-internacional transition-colors"
                      @click="menuOpened = false"
                    >
                      <span class="sr-only">Fechar menu</span>
                      <i class="ri-close-line"></i>
                    </button>
                  </div>
                </div>
                <div
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div class="px-2 pt-2 pb-3 space-y-1" role="none">

                    <a
                      href="https://forms.gle/aRz41wEpAjKrvRHfA"
                      class="block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >Faça parte da comissão!</a
                    >

                    <a
                      href="#atividades"
                      class="block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >Nossas Atividades</a
                    >

                    <a
                      href="#acesso-api"
                      class="block px-3 py-2 rounded-md text-base font-bold text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >acesso aos dados - API</a
                    >

                    <a
                      href="#aplicacoes"
                      class="block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >Aplicações</a
                    >

                    <a
                      href="#quem-somos"
                      class="block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >Quem somos</a
                    >

                    <a
                      href="#perguntas-frequentes"
                      class="block px-3 py-2 rounded-md text-base font-bold text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >FAQ</a
                    >

                    <a
                      href="#contato"
                      class="block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors"
                      role="menuitem"
                      @click="menuOpened = false"
                      >Contato</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <section
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                v-if="hero.title"
                class="text-4xl tracking-tight font-normal text-gray-900 sm:text-5xl md:text-6xl"
                v-html="hero.title"
              ></h1>
              <h1
                v-else
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block text-laranja-internacional lowercase"
                  >dados</span
                >
                <span class="block text-perola-negra font-normal lowercase"
                  >são <span class="font-bold">poderosos</span></span
                >
              </h1>

              <p
                v-if="hero.text"
                class="mt-3 text-base text-perola-negra font-body sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                v-html="hero.text"
              ></p>
              <p
                v-else
                class="mt-3 text-base text-perola-negra font-body sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Somos a <span class="text-perola-negra font-bold">DadosPET - Comissão Nacional de Centralização e 
                Processamento de dados dos Grupos PET</span>, criada na assembleia geral do XXV ENAPET, sendo portanto vinculada à CENAPET. Somos membros e egressos do Programa de Educação
                Tutorial que atuam com o objetivo de coletar, organizar, manter e garantir transparência de acesso aos 
                dados do programa, inclusive aos dados que são oficialmente públicos e disponibilizados pelo Ministério da Educação.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div class="lg:absolute lg:h-full lg:inset-y-0 lg:w-full">
        <div class="lg:relative lg:h-full lg:max-w-7xl lg:mx-auto">
          <ElementHeroImage
            class="lg:absolute lg:-right-60 lg:-mt-4 lg:inset-y-0 h-full -ml-40"
            :alt="hero.circleImage.alternativeText"
            :src="hero.circleImage.url"
          ></ElementHeroImage>
        </div>
      </div>
    </div>

    <section>
      <div class="relative bg-linho overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div
            class="p-8 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center"
          >
            <div class="lg:col-start-2 lg:pl-20">
              <ul>
                <li
                  v-for="entry in hero.entries"
                  :key="entry.title"
                  class="py-5"
                >
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div
                        class="flex items-center justify-center h-12 w-12 rounded-md bg-laranja-internacional text-linho"
                      >
                        <i :class="entry.icon + ' text-xl'"></i>
                      </div>
                    </div>
                    <div class="ml-4">
                      <p
                        class="text-lg leading-6 text-laranja-internacional font-bold"
                        v-html="entry.title"
                      ></p>
                      <p
                        class="mt-2 text-base font-body leading-6 text-perola-negra"
                        v-html="entry.text"
                      ></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
              <img
                :alt="hero.presentationImage.alternativeText"
                :src="hero.presentationImage.url"
                class="relative mx-auto shadow-lg rounded w-auto"
              />
              <a style="margin-left:20px" :href="hero.presentationImage.credits" target="_blank">Imagem por liuzishan</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PetWebsiteHeroData } from './../../assets/content-model/content-model'

export default Vue.extend({
  props: {
    hero: {
      type: Object as () => PetWebsiteHeroData,
      required: true,
    },
  },

  data() {
    return {
      menuOpened: false,
    }
  },
})
</script>
