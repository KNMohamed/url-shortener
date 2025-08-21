export interface UrlItem {
    id: string; // unique, short identifier for the URL. Comes after the domain e.x x1Y-bC
    target: string; // original, long URL that short url redirects to
    createdAt: string; // ISO 8601 string 
    password: boolean; //allows the client to know whether a URL is password-protected 
    count: number; // total number of times this short URL has been clicked.
    shortUrl: string; //The full, shortened URL including the domain
  }
  
export interface UrlState {
    list: Array<UrlItem>; //The array of URL items retrieved from the server.
    isShortened: boolean; // Boolean flag to indicate if the last action successfully shortened a URL.
    count: number; // The number of URLs to show per page
    countAll: number; // total number of URLs for the user; used for pagination
    page: number; // current page number being displayed in the URL list.
    search: string; // search query string used to filter the list of URLs. 
    status: "idle" | "loading" | "succeeded" | "failed"; // status of the asynchronous operation. This is a standard pattern in Redux Toolkit.
    error: string | null;
}

export interface CreateUrlParams {
    target: string; // The original URL to be shortened
    password?: string; //An optional password to protect the short URL. If provided, the user must enter this password.
    customurl?: string; // An optional custom short ID for the URL. otherwise random short ID
}

export interface RootState {
  url: UrlState;
}