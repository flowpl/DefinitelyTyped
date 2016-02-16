// Type definitions for the Facebook Javascript SDK
// Project: https://developers.facebook.com/docs/javascript
// Definitions by: Amrit Kahlon <https://github.com/amritk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import fb = facebook;
declare var FB: fb.IFacebookStatic;
declare module facebook {

    interface IFacebookStatic {
        // api: any;
        // AppEvents: any;
        // Canvas: any;
        // Event: any;
        /**
         * The method FB.getAuthResponse() is a synchronous accessor for the current authResponse.
         * The synchronous nature of this method is what sets it apart from the other login methods.
         *
         * @param callback function to handle the response.
         */
        getAuthResponse(callback: (response: ILoginStatusResp) => void): void;
        /**
         * FB.getLoginStatus() allows you to determine if a user is
         * logged in to Facebook and has authenticated your app.
         *
         * @param callback function to handle the response.
         */
        getLoginStatus(callback: (response: ILoginStatusResp) => void): void;
        /**
         * The method FB.init() is used to initialize and setup the SDK.
         *
         * @param params params for the initialization.
         */
        init(params: IInitParams): void;
        /**
         * Use this function to log the user in
         *
         * Calling FB.login() results in the JS SDK attempting to open a popup window.
         * As such, this method should only be called after a user click event, otherwise
         * the popup window will be blocked by most browsers.
         *
         * @param callback function to handle the response.
         * @param options optional ILoginOption to add params such as scope.
         */
        login(callback: (response: ILoginStatusResp) => void, options?: ILoginOptions): void;
        /**
         * The method FB.logout() logs the user out of your site and, in some cases, Facebook.
         *
         * @param callback function to handle the response
         */
        logout(callback: (response: ILoginStatusResp) => void): void;
        // ui: any;
        // XFBML: any;
    }

    interface IInitParams {
        appId: string;
        version?: string;
        cookie?: boolean;
        status?: boolean;
        xfbml?: boolean;
        frictionlessRequests?: boolean;
        hideFlashCallback?: boolean;
    }

    interface ILoginOptions {
        auth_type?: string;
        scope?: string;
        return_scopes?: boolean;
        enable_profile_selector?: boolean;
        profile_selector_ids?: string;
    }


    ////////////////////////
    //
    //  RESPONSES
    //
    ////////////////////////

    interface ILoginStatusResp {
        status: string;
        authResponse: {
            accessToken: string;
            expiresIn: number;
            signedRequest: string;
            userID: string;
        }
    }
}
