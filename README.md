xhprof-html
===

# Usage

1. `git clone https://github.com/TomoakiNagahara/xhprof-html.git`
2. `cd xhprof-html`
3. `php -S localhost:8000`
4. Access : `http://localhost:8000/?dir={Your xhprof profiling result dir}`

## Install of xhprof

- macOS : `sudo port install php-xhprof`
- Redhat : `sudo yum install php-xhprof`
- Debian : `sudo apt install php-xhprof`
- FreeBSD : `sudo pkg install php-xhprof`

## xhprof example

```index.php
<?php
//  Start profile
xhprof_enable();

//  Do
var_dump($_SESSION);

//  Get profile
$prof = xhprof_disable();

//  Save profile
$pson = serialize($prof);
$path = '/tmp/index.xhprof';
echo file_put_contents($path, $pson) ? 'Success': 'Failed';
```

## Show profile

1. Start of PHP build-in Web Server : `php -S localhost:8000`
2. Access : `http://localhost:8000/?dir=/tmp/`

# Other xhprof visualization tools

 * You can find other visualization tools on [GitHub Topics](https://github.com/topics/xhprof?o=desc&s=stars)
 * [tideways/download](https://tideways.com/profiler/downloads)
