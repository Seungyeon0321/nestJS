'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' :
                                            'id="xs-controllers-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' :
                                        'id="xs-injectables-links-module-AppModule-37093121686af1d72a61cd11cf982451e57d5a96efd29a9db05b261998256909c68c9b37a60412125d27e7cb7611e401f3795d05c0a660ca1691ce4c44ffe93e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' :
                                            'id="xs-controllers-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' :
                                        'id="xs-injectables-links-module-AuthModule-7e85fc0e9a1dff7279fed906d9eb06e43917ffefe966708ed4b088434e161a75e0cae733a1636a666dd8e4e6fda5454f0f27b80c1d8a409916d3392d71545dc9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' :
                                            'id="xs-controllers-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' :
                                        'id="xs-injectables-links-module-PostsModule-cbddcb39aeb80508e2f271d6010cce4ebd3b23f1726076bf30167574d9d212a1b789a52817e8d08e3e050eb9c7ca099321fe5f5c0d410a09d4d423049db2ee2d"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' :
                                            'id="xs-controllers-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' :
                                        'id="xs-injectables-links-module-UsersModule-196db7207f8af2408e7d340a1cb2d1c118f280253d309552739f9d9365bf204d7039377d319af7b40bb1aa7fb967685d623df369ef7f8aaba62464e071701a02"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MetaOption.html" data-type="entity-link" >MetaOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthServices.html" data-type="entity-link" >AuthServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});