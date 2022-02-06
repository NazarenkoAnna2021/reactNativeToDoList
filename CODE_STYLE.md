1. Названия папок с маленькой буквы.
2. Названия папок должны соответствовать и полностью описовать содержимое папки. 
3. Картинки в папке assets. Папка находится на уровне с src.
4. App находится в папке src.
5. Названия функций это глагол.
6. Названия типа Boolean начинаются с is (isVisible).
7. Отступы в файле 4.
8. Названия папок с маленькой буквы.
9. В папке компонента находятся файлы (index.tsx, styles.ts).
10. Стили писать только в styles.ts. Инлайново не пишем.
11. Все if пишем со скобками.
12. Используем только стрелочные функции.
13. Интерфейсы и типы в папке entities, за исключением IProps.
14. Локализация и темы в src.
15. Валидация в папке modules.

assets
modules
    \
    authentications
        \
        presenter
        ui
            \
            components
                    \
                    authenticationButton
                    authenticationInput
                    authenticationTransitionText
                    passwordInput
                    signInText
                    termsCheckBox
                    userAvatar
            screens
                \
                signInScreen
                signUpScreen
        useCases
            \
            authorization
            getUser
            resetStorage
            storeUser
    toDoRooms
        \
        presenter
         ui
            \
            components
                    \
                    drawerContent
                    homePageText
            screens
                \
                homePage
        useCases
src
    \
    localization
    navigation
        \
        containerNavigator
        drawerHomeNavigation
        stackAuthenticationNavigator
        tabHomeNavigation
    themes
    App.tsx
