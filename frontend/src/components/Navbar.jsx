import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div>
      <header className=" py-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 dark:text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-xl font-medium">
                  <NavLink to={"/"}>
                    <li>
                      <a
                        className="text-primary transition hover:text-gray-300/75"
                        href="#"
                      >
                        Beranda
                      </a>
                    </li>
                  </NavLink>

                  <NavLink to="/berita">
                    <li>
                      <a
                        className="text-primary transition hover:text-gray-300/75 "
                        href="#"
                      >
                        Berita
                      </a>
                    </li>
                  </NavLink>

                  <NavLink to="/scanTrash">
                    <li>
                      <a
                        className="text-primary transition hover:text-gray-300/75  "
                        href="#"
                      >
                        Deteksi
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </nav>
            </div>

            <div className="flex items-center ">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  {token ? (
                    <div className="flex items-center justify-between gap-x-2 group relative">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={assets.profile_pic}
                        alt=""
                      />
                      <img
                        className="w-2.5"
                        src={assets.dropdown_icon}
                        alt=""
                      />
                      <div className="absolute w-56 top-12 right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                        <div className="bg-primary shadow-lg divide-y divide-gray-100 rounded flex flex-col gap-4 p-2">
                          <p className="cursor-pointer text-gray-500 hover:bg-gray-300/75   rounded-lg px-4 py-2">
                            My Profile
                          </p>
                          <p className="cursor-pointer text-gray-500 hover:bg-gray-300/75  rounded-lg px-4 py-2">
                            Points
                          </p>
                          <p
                            onClick={() => setToken(false)}
                            className="cursor-pointer text-red-700 hover:bg-red-100 rounded-lg px-4 py-2"
                          >
                            Logout
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate("/login")}
                      className="rounded-md hover:bg-[#BF9264] bg-orange-400 px-5 py-2.5 text-sm font-medium text-primary hover:scale-105 transition-all duration-300"
                      href="#"
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-[#BF9264] p-2 text-gray-600 transition hover:text-gray-600/75 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div class="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
        <div class="container">
          <div class="relative flex items-center justify-between">
            <div class="px-0 sm:px-4">
              <a href="index.html" class="block py-6 text-lg font-bold">
                <img
                  class="h-[80px] sm:h-[90px]"
                  src="img/Logo_Bangkit_Hijau.png"
                  alt=""
                />
              </a>
            </div>
            <div class="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                class="absolute right-4 block lg:hidden"
              >
                <span class="hamburger-line transation origin-top-left duration-300 ease-in-out"></span>
                <span class="hamburger-line transation duration-300 ease-in-out"></span>
                <span class="hamburger-line transation origin-bottom-left duration-300 ease-in-out"></span>
              </button>

              <nav
                id="nav-menu"
                class="absolute right-4 top-full mt-1 hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
              >
                <ul class="block py-2 lg:flex lg:py-0">
                  <NavLink to={"/"}>
                    <li class="group">
                      <a
                        href="index.html"
                        class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger"
                      >
                        <svg
                          class="flex h-4 lg:hidden"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                          />
                        </svg>
                        <p class="ml-3 lg:ml-0">Beranda</p>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to={"/berita"}>
                    <li class="group">
                      <a
                        href="berita.html"
                        class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 18"
                          fill="currentColor"
                          class="flex h-4 lg:hidden"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v11.75A2.75 2.75 0 0 0 16.75 18h-12A2.75 2.75 0 0 1 2 15.25V3.5Zm3.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM5 5.75A.75.75 0 0 1 5.75 5h4.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 8.25v-2.5Z"
                            clip-rule="evenodd"
                          />
                          <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 1 0 2.5 0V8a1.5 1.5 0 0 0-1.5-1.5Z" />
                        </svg>
                        <p class="ml-3 lg:ml-0">Berita</p>
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/scanTrash">
                    <li class="group">
                      <a
                        href="galeri.html"
                        class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200 lg:mx-8 lg:text-base lg:text-white lg:hover:bg-transparent lg:hover:text-ginger"
                      >
                        <svg
                          class="flex h-4 lg:hidden"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 18"
                        >
                          <path
                            fill="currentColor"
                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                          />
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                          />
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                          />
                        </svg>
                        <p class="ml-3 lg:ml-0">Deteksi</p>
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </nav>
            </div>

            <div class="mr-14 px-4 lg:mr-0">
              <button
                type="button"
                class="mr-3 flex rounded-full text-sm md:mr-0"
                id="user-photo"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span class="sr-only">Open user menu</span>
                <div class="relative h-[50px] w-[50px] overflow-hidden rounded-full">
                  <img
                    class="h-auto w-full"
                    src="https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg?w=740&t=st=1691741220~exp=1691741820~hmac=f67b4e7dde34c17174187e319da0f3fb7c3a496fc2ab0324605a85f2163ff9ba"
                    alt="user photo"
                  />
                </div>
              </button>
              <nav
                id="nav-user"
                class="absolute right-4 top-full mt-1 hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg"
              >
                <div class="mx-3 px-4 py-3">
                  <span class="block text-sm text-ink">Boni Yudistira</span>
                  <span class="block truncate text-sm text-ink">
                    boni@email.com
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200"
                    >
                      <svg
                        class="h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                        />
                      </svg>
                      <span class="ml-3">Info Akun</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group mx-4 flex rounded-md p-3 text-sm text-ink hover:bg-gray-200"
                    >
                      <svg
                        class="h-4"
                        aria-hidden="true"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.5 8C5.80777 8 5.13108 7.79473 4.55551 7.41015C3.97993 7.02556 3.53133 6.47893 3.26642 5.83939C3.00152 5.19985 2.9322 4.49612 3.06725 3.81719C3.2023 3.13825 3.53564 2.51461 4.02513 2.02513C4.51461 1.53564 5.13825 1.2023 5.81719 1.06725C6.49612 0.932205 7.19985 1.00152 7.83939 1.26642C8.47893 1.53133 9.02556 1.97993 9.41015 2.55551C9.79473 3.13108 10 3.80777 10 4.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.5 17H1V15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 11H18.38C18.2672 10.5081 18.0714 10.0391 17.801 9.613L18.601 8.818C18.6947 8.72424 18.7474 8.59708 18.7474 8.4645C18.7474 8.33192 18.6947 8.20476 18.601 8.111L17.894 7.404C17.8002 7.31026 17.6731 7.25761 17.5405 7.25761C17.4079 7.25761 17.2808 7.31026 17.187 7.404L16.392 8.204C15.9647 7.93136 15.4939 7.73384 15 7.62V6.5C15 6.36739 14.9473 6.24021 14.8536 6.14645C14.7598 6.05268 14.6326 6 14.5 6H13.5C13.3674 6 13.2402 6.05268 13.1464 6.14645C13.0527 6.24021 13 6.36739 13 6.5V7.62C12.5081 7.73283 12.0391 7.92863 11.613 8.199L10.818 7.404C10.7242 7.31026 10.5971 7.25761 10.4645 7.25761C10.3319 7.25761 10.2048 7.31026 10.111 7.404L9.404 8.111C9.31026 8.20476 9.25761 8.33192 9.25761 8.4645C9.25761 8.59708 9.31026 8.72424 9.404 8.818L10.204 9.618C9.9324 10.0422 9.73492 10.5096 9.62 11H8.5C8.36739 11 8.24021 11.0527 8.14645 11.1464C8.05268 11.2402 8 11.3674 8 11.5V12.5C8 12.6326 8.05268 12.7598 8.14645 12.8536C8.24021 12.9473 8.36739 13 8.5 13H9.62C9.73283 13.4919 9.92863 13.9609 10.199 14.387L9.404 15.182C9.31026 15.2758 9.25761 15.4029 9.25761 15.5355C9.25761 15.6681 9.31026 15.7952 9.404 15.889L10.111 16.596C10.2048 16.6897 10.3319 16.7424 10.4645 16.7424C10.5971 16.7424 10.7242 16.6897 10.818 16.596L11.618 15.796C12.0422 16.0676 12.5096 16.2651 13 16.38V17.5C13 17.6326 13.0527 17.7598 13.1464 17.8536C13.2402 17.9473 13.3674 18 13.5 18H14.5C14.6326 18 14.7598 17.9473 14.8536 17.8536C14.9473 17.7598 15 17.6326 15 17.5V16.38C15.4919 16.2672 15.9609 16.0714 16.387 15.801L17.182 16.601C17.2758 16.6947 17.4029 16.7474 17.5355 16.7474C17.6681 16.7474 17.7952 16.6947 17.889 16.601L18.596 15.894C18.6897 15.8002 18.7424 15.6731 18.7424 15.5405C18.7424 15.4079 18.6897 15.2808 18.596 15.187L17.796 14.392C18.0686 13.9647 18.2662 13.4939 18.38 13H19.5C19.6326 13 19.7598 12.9473 19.8536 12.8536C19.9473 12.7598 20 12.6326 20 12.5V11.5C20 11.3674 19.9473 11.2402 19.8536 11.1464C19.7598 11.0527 19.6326 11 19.5 11ZM14 14.5C13.5055 14.5 13.0222 14.3534 12.6111 14.0787C12.2 13.804 11.8795 13.4135 11.6903 12.9567C11.5011 12.4999 11.4516 11.9972 11.548 11.5123C11.6445 11.0273 11.8826 10.5819 12.2322 10.2322C12.5819 9.8826 13.0273 9.6445 13.5123 9.54804C13.9972 9.45157 14.4999 9.50108 14.9567 9.6903C15.4135 9.87952 15.804 10.2 16.0787 10.6111C16.3534 11.0222 16.5 11.5055 16.5 12C16.5 12.663 16.2366 13.2989 15.7678 13.7678C15.2989 14.2366 14.663 14.5 14 14.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span class="ml-3">Pengaturan</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="group mx-4 flex rounded-md p-3 text-sm text-red-500 hover:bg-gray-200"
                    >
                      <svg
                        class="h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                        />
                      </svg>
                      <span class="ml-3">Keluar</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
