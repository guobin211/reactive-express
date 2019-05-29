/**
 * npm
 * @author guobin201314@gmail.com on 2019-05-28
 */

function main() {
  // console.log(process.env);
  const arr = process.env.npm_package_scripts_npm_args.split(" ");
  arr.forEach(el => {
    if (el.includes('--config')) {
      console.log(el.split("=")[1]);
    }
  })
}

main();
