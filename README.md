# p.o.c

using live-server with content security policy and import-export module syntax.

## install live-server

    npm install -g live-server
    
## cd into local directory and start
  
    $ cd ../../live-server-test
    $ live-server

## define strict but lax-fallback CSP meta tag in index.html

    &lt;meta name="Content Security Policy" content="script-src 'unsafe-inline' https: 'nonce-Saik14t9sjq24' 'strict-dynamic' "&gt;

## include script

    &ltscript async type=module nonce="Saik14t9sjq24" scr="/index.js">
    {
      "test": "message's message"
    }
    &lt;/script>
    
## script with imports

    import a from '/a.js';
    import b from '/b.js';
    
    console.info(a());
    console.info(b());

## define a.js and b.js...

    export default a;
    
    function a() {
      return message;
    }
    
    const message = "this is module a";
    
## *et cetera*

