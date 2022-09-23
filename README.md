# gitlab-comment

> add comment to gitlab

<p>
  <a href="https://www.npmjs.com/package/gitlab-comment" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/gitlab-comment.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/ThaddeusJiang" target="_blank">
    <img alt="Twitter: ThaddeusJiang" src="https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social" />
  </a>
</p>



### 🏠 [Homepage](https://github.com/ThaddeusJiang/gitlab-comment#readme)

## Usage

1. add variable to Project > Settings > CI/CD > Variables

```
API_ACCESS_TOKEN=<your_access_token>
```

2. update gitlab-ci.yml

```
script:
    - yarn global add gitlab-comment
    - gitlab-comment "<whatever you want>"
```

## Run tests

```sh
npm run test
```

## Author

👤 **TJ**

* Website: https://thaddeusjiang.com/
* Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
* Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ThaddeusJiang/gitlab-comment/issues). You can also take a look at the [contributing guide](https://github.com/ThaddeusJiang/gitlab-comment/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_