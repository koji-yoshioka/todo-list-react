module.exports = {
  // 参考：https://zenn.dev/the_exile/articles/1e938fec43f561
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "^@?\\w",
    "^[./]",
  ],
  importOrderSortSpecifiers: true,
};
