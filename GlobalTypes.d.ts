interface Repository {
  id: Number;
  name: string;
  description?: string;
  stargazers_count?: Number;
  language: string;
  license?: {
    key: string;
    name: string;
    spdx_id: string;
  };
  html_url: string;
}
