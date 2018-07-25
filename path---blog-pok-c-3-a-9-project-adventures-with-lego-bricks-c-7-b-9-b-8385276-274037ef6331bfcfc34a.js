webpackJsonp([0x5c3054495a4e],{1347:function(a,t){a.exports={data:{site:{siteMetadata:{title:"Psyked.co.uk",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/pok%C3%A9project-adventures-with-lego-bricks-c7b9b8385276/index.md absPath of file >>> MarkdownRemark",html:'<h1>PokéProject: Adventures with LEGO Bricks</h1>\n<h2>Part 3: From a theory to the real world.</h2>\n<p>PokéProject: LEGO Edition <a href="https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-7f24c02f6d9d">started with colour mapping</a> and developed into a calculation of <a href="https://medium.com/@psyked/pok%C3%A9project-adventures-with-lego-bricks-cd9401091239">optimal brick placement</a>, and now I’m planning to put some money on the line and <em>actually purchase</em> some bricks and make this project into a tangible reality.</p>\n<hr>\n<h4>Realistic Brick calculations</h4>\n<p>So what’s next? Turns out there’s one more issue… a flaw in my logic.</p>\n<p>I had incorrectly assumed that all of the LEGO brick colours I’d grabbed from the internet were available as 1x1 bricks, and my ‘algorithm’ was based around that assumption. When I actually went to go and purchase those bricks… then I had a problem. And for some sprites, it was quite a problem.</p>\n<p>I’ve highlighted the problematic pixels in these images:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD60lEQVQ4y2NgQAM+bmZgOjfJhhEmFuVlVOrn51AB43sbWjOBaH8LFQaiQFyAHlhDdoC8qb2NXmlJlsftvDTPL+5mhv1ORoUiIDlfe0MmogwzNTeEMbkSXQzXVGX5/l+7MPDbxAL3P93JSf/d1Uxm2MczCIBdaicEVmgmw4ppkJ+CNpguiDFnBtE5YZrFXQlh/xe3e32/eizq37FtwX9b01y/tpvG/fcz8SgFe1nHmQVssKM5bhf2xHSDvaJtxKLfnhX7Z11X+N97l8L/7loa9XtRZOb/DtWKpwwMPKIw9WrictgN8lFjg7O3mU0Pi9PST0+PCbsxoaL5/+Ru3z8d+Rm/V1d0/I/T8b5RkWKxviDKZLmygIAgODwtlRkxDIwViwd7NVAwIixML+x/S1nA/9Jgj5/lfol/a7P8/3YGx//ts6r8W2vv8H/TnML/1dEJ3xkYBCRAeuw0bDENDBCJB3s1SCzWz1487L+mpumfFaFa/5a4Cf3NkXP4m6oe93eKjdzf/UkSvyfbOP73Y08KBqlvMw1mxuplHjlphv9ACAIe4ikTgiW1/m/2Efi9Xojhb7mGyb9qZ4e/65UY/h2Ikfy3ypj3v7+a1OK0eCUpkPpoGylGrIYaSFuDbRNVcLKLF5b7P5mB4X8rA8PfCtfyv3nWcX+DZGX/FnLx/spmE3ga7+D639NJJxuk3t1GH9OVOlI2DJEW/mAJBzOP8mrFoP/+cma3fOz9/ytqW/5WNrb9b+MVuBsYblIMukaSDErq4kKSujwg9exSuthj2lHWB+x0BX59qViV9LmLs9Z8XN2z519v4fSf02uX/mlNaP/qZxgYiaxHTlEPf05ZFLAU7Mp+59YZ9f4t/+sj2/4tKlnxf0nh6v8pHjn/Xcy9l4AzQFA2i5SCPFiPlrY2dsNClO0YxMW1wa5kF5U1LHIL/RspFXfV1TNyRnho1qEyqcrvXf6xt9Xs+HVAaoIdTBhxusyASx1Mxyu6Q9KjgJnbjOzc/wFu7qUwNdnCRYU9fjn/TfRNA8EJ2tSVWVRRE7uBjUalDA7yTDAbududve+06JU8Y+DlEoOXQhZO6xJt7C/BNQkQKHAyzXXBrrMzZ3CdYZPyP0wwqwQmJ8SupdAQUfJ/olf7V2dT3wSQ2OmMjYw4XdimAtErxcDGOjewfW1fUO9/eSFjO5i8oLCURGRw7uKK6PqfPs4hG0Fi////ZxBT0sJuYIFrHth1oZpB8Ufa9/6f0DzrP7eyNNhANQNjFrhCfgYJBnkWbjBbnhu3d9VMTCHhJ8rP7+wVsN7e2WsGkAcOJC1NcwYOAXGG/1f+w2OV2RJSbCmZOqGYAwAgAjOLcp/5AgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 rU7 XZWxTWMKPwGjNcPFJg"\n        title=""\n        src="/portfolio-2018/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-082ce.png"\n        srcset="/portfolio-2018/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-c7cb1.png 158w,\n/portfolio-2018/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-93041.png 315w,\n/portfolio-2018/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-082ce.png 630w,\n/portfolio-2018/static/1*rU7_XZWxTWMKPwGjNcPFJg-88906d90e6f50d5ad351c159c7e0fe7b-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*_Ca4g3bvmBZYkOfLDjsUdw-bc0d4dc2bcb9c5d5cfa67814cc9ad74b-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE8UlEQVQ4y41Ue0yTVxS/XwuiK9ACkUIRWuwDKIUitOXRYqG2TooiFG2plEIrtRRoQaRIfRVxohsdis6omVMzjEY3H8O5h4vRLYYt2TK3uUeM2R8marIsy5Ysc2q596z9MMZNknny5TvnO/ee3z3nu+d3EJpFeli8p/a5ihbGs2v96UIqqi9IVqMq9BJ6ITmRp6L11WoPHaxDiGejmJUxCCVGv51zFfQha9gm9MJyXFHDpDNKVdk3z8u5u2NeNt6f2zHFeQJqn1NDg6ZkiWeJLkpGaFEybcpEbGSVJlI8ABRJb+7kSu8Ptzsuw87k4kdviV0QUuk/RaiMFd27mL2Ueh6rlcv4CUSUeSydyu7nMsrMxYy7tXvo7MY55sD94Ifw7dixh6eWubAvTfPwXPYuWMHK2x5dH41VM1EBP5JFEkKC+P+puRiJXqGkN67Ve+Fdn3160m4hW9PU4TeRGLbExX6DePa4n8s3UcGlOgbAZWTzCxgcHZtCOR5+ucyfcjHTyT2GeoUahUlk1NTlfyBcJfmzYmU8bElMwIeSheQMkyL7KUSOIQR7UczfDSgxYdZE0pek9nuGZOB/gwf1oxzQtIsgyVUIyC8G1CXCxRYRWayRk755aWQcMfC5COBuxLzHyeZrZYV6l0on265r438hWp4RiClNzEWlRfphXY0R/Nbmh0Mj6rDcnIuRVzqNNooJahcQZn8OiWuVkXibkhgkbNzAZwNLnfoH1Zj5yFLVAo3rpTCyrwC8R7JAZk6dRLvQIJupzzo/15QP8Q0FwHUoYI5xIUHd2QQt5RFUzSXInkFQSyah6iN+Mx8nNsvBoGiDra0NeMuZJNwzngZtw6lYZVoQoMsWypQcVklaIdIxz3q8u2HowGFcajbh0NGTZPD1o2RJdwg3tr6K03UyjAYEJCYgxfqSZqIwah84xlL+qrIu+JwtXlhNg8kFVc9QK4V/YN97v5+4cAWGjxzGk9/fJJunbhLzxgksz9MQlWEZ4dTL8HxdQVhtNkK5ZMnZSFBWpCPnRKPP3kqa6cs846qYqF5QpHW0T1yCTW+fnu4YHceuE18RU+gScey/Qpp6B0nrehdZ09lBCiWV2LopAOu2ng6n164oi8ZqrPpYhLiRp7AEfclz0shqXv77zm0HwfLJjfBg6CPS1jRAvDYPdkxcJ20XrhNnsJu0B73E1uEitoMfh51T96CytutGJJSuUsnRIsSaoWZUYpuUvlsDO66Be/J2uPPI19hd7savBcaw++RU2DFx8bE7uAF3BgaIydNN/B0hsrpvZFogUUKCmF8cBeAsFDHQutq9NM3O5363qGFt6FdD+xDUdY1Agy8IFscg0Vu7wbptEHwOP6zt7YXOkZNkRd/OsKGy8bG3pxeaXC4ol9WM01OoomvmPiLvFFPzrtvO4+9Am60blEXqO6vMzb/Z+9bB6rqWB8vUpsu5UvnOSrfv/prTV6Bx7BBkKKp2W6rW/lhprMOlmprNUZwNnuDMpYgXleWrKpZf1eqNd5brLHsQErEEsRWSDGmxPpNdUvDkl3AM7t5fmg+eAk3Pjs9oTz6Pm5AhzHvaJFG4kuqXnx1BjNnoCZFRliyQxVUYDBaFWu2PuP7F442+0H9GmFZPwXWg7dGhvdT8tDyqUKqlckvVDGmOmkrm5Tx3SGp2DiWRlVKCAgUllJfMEESuRP8AnGfG6xX67+oAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1  Ca4g3bvmBZYkOfLDjsUdw"\n        title=""\n        src="/portfolio-2018/static/1*_Ca4g3bvmBZYkOfLDjsUdw-bc0d4dc2bcb9c5d5cfa67814cc9ad74b-082ce.png"\n        srcset="/portfolio-2018/static/1*_Ca4g3bvmBZYkOfLDjsUdw-bc0d4dc2bcb9c5d5cfa67814cc9ad74b-c7cb1.png 158w,\n/portfolio-2018/static/1*_Ca4g3bvmBZYkOfLDjsUdw-bc0d4dc2bcb9c5d5cfa67814cc9ad74b-93041.png 315w,\n/portfolio-2018/static/1*_Ca4g3bvmBZYkOfLDjsUdw-bc0d4dc2bcb9c5d5cfa67814cc9ad74b-082ce.png 630w,\n/portfolio-2018/static/1*_Ca4g3bvmBZYkOfLDjsUdw-bc0d4dc2bcb9c5d5cfa67814cc9ad74b-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*EwrUQTt0cCVQurrcolcHLA-917df0af6b878fa3db41f23c53a75a48-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFBUlEQVQ4y22Te1BTVxCHTwgkMQKJSBJC0gSSgImBhITIS9AIosNDCFQsCIIFZ6gvKtpRtK1VlPqoOLQ+Knaw5aGIUjRmjIwgKmJthAr4KLZWFI2DMra1UB2JuXeb3BCnKuefu3t297u/s+csYommIvtiieQ+HJEslXBiNiMVmbAQw0eAxBGJyMWFhLz9ZIgtVpCYXD8ixpVOQ+6TfdAby3dKsAvxDQyaz5WqwEuilNt9lVLuUhTDQvkh3uirLCHpm9IwsrNGFr+M5OMvIGy+POxNoLtoBsn+9RQoK/lSNcj8+Yvs/ra2DWQAQFbzQpf/pVN9hZ58p6PTcElb5rAI+9M4jmOzqSqcAAaqQ/T6PVzYnU8+NJZPcRameCJplk5Uro7T3vCWJQJLom6QcBHVGV8RyiAYZfNtrXjciAgFBWmcnS86qFCzyq2/tkSx01Ax83pDmbrhRJm6/MqP80aedmfDmoIimDhFB7xAddkYy94GV7uxWEIjoGjx9AkOhQgJjm1kmDtqNXC/Kwee3c0HQ+0c6GlJhaEbWVB/MG1EJJnd7i2WL3Iqq/ki7HB9WaRxDIxWhjIQWqCkEQq1TBS6Kkc+cvZ4PH6vO8/yy7n5rwLUUZYNJTEvGw/OBluX050gm0Fp+1ZePdy/BB715MKObMkn9v1j26LIKDdpCgFMi/TJLVyshdM1CZbm72Kw3osLsHVrY7GmvTMtPx+Khvw45jJ73sb3JZrLP4TcfDmQB/8+XGp5/qAQmvdqL9hCjiND63TCWD/L68Sto0FQW+pnaSplYpcOiPFegwozqBiWs6FukPmBsM6eV12qGei+lAvDD1ZYbnVkjQ5cz4OLRxLwhX5UBQFsiycTCpfx3bZe3e0Kd065We8ZaNjTFjf8Sasr/tNSsuXW5xRIT/Wtqi9mfP3svAfcbxWPmruSobM1A6r2J0Hx8ui9zj6iadEyh1S0nrajRNg32EyF+zboUAsdHzxLxx9foFhHTBNhS3Fw76YchvF5OxUeGV2tDeXsl0XLIw0skWKWs7cqPx4JUbwCnT7py83xXXfa46DvJPvVX+cn4INnqHh3nYd14HIsHP4+fcSW412xlFppLHcHhZiX6SwEqEceyNPhFOYGEwrZ3sypJmPKUI8hGfo7c6x/3s7C+06q8b7LmdhtUzbecSr9VYBYVLBvpfuJu8eosDplwn573a61QlcKjU2w2GLb1M6IkhJn92D6Jp+uTYCbLfOsvcZ5eOepdNyk12FP+vJw01EN1m5IxNdkc+GPA66w5yNqsy5ikg6h7YSYAIkfmsTzHxubJVEEUButLKrcFA3Hd6kspsa5WNOhBLxmpwY7V6XF2hrTrL/qeVD0IftxRoTg71i5sOH1dNOD0TiLztq/Wf6w35QJ7XVJ1v5rBdjgnRXWluoka9vRuViXcQZmPkPH95UwR2fKhC8Sw0VHbC+XGDmBTI6k4vfeBqp51VtZQ6PX+GDujB59dHUW/qxXC8M9Srjb4j96XS+ympvd4UzFROCJAl6PHuKEvqtt91oO8Q5TYthlx7e5w+91ZNBvp+OlqzgPKtdR//mtgQZmPcV6fg8FCnWTDzpu1X7fQY7LFAe9Cw2hIXpuYsCVzzJ5WEaYzxU2R5bhiATzY/xZqyuLvYYrPhbAJL6GeCrhGjnRd1+xFI277D8Mjo5URGgk4ePFg6aHpSYnhDTGxquVxGl04aQwhWBc1n/3Y/Jxs9GLBwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 EwrUQTt0cCVQurrcolcHLA"\n        title=""\n        src="/portfolio-2018/static/1*EwrUQTt0cCVQurrcolcHLA-917df0af6b878fa3db41f23c53a75a48-082ce.png"\n        srcset="/portfolio-2018/static/1*EwrUQTt0cCVQurrcolcHLA-917df0af6b878fa3db41f23c53a75a48-c7cb1.png 158w,\n/portfolio-2018/static/1*EwrUQTt0cCVQurrcolcHLA-917df0af6b878fa3db41f23c53a75a48-93041.png 315w,\n/portfolio-2018/static/1*EwrUQTt0cCVQurrcolcHLA-917df0af6b878fa3db41f23c53a75a48-082ce.png 630w,\n/portfolio-2018/static/1*EwrUQTt0cCVQurrcolcHLA-917df0af6b878fa3db41f23c53a75a48-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Highlighting the invalid / unavailable pixels in Magenta</p>\n<p>So, how best to deal with this issue?</p>\n<p>I’m loathe to simply remove those pixel colours from the pool — I like what I’ve achieved with the colour matching, and besides we only have 41 LEGO colours to play with as it is — don’t want to reduce that pool any further.</p>\n<p>My solution was to take those invalid bricks and find the next best fitting brick colour, repeatedly updating and looping through the image data and recalculating a next-best colour match for each pixel of the sprite until I had an acceptable match.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*JiEovDUZyrhOyrc8EJAH5g-19b43a69fae914333c78f8b189d78356-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD7ElEQVQ4y2NgQAM+bmZgOj/enhEmFuVlVOrn51AB47vYGDCBaH8LFQaiQIKfIVhDvq+KqYO1QWlJlvvtvDSPLy7Wuv36/qEiIDlfB4ihBIGpuSGUxcsV66m9piLH6/+ahQHfusvs/9SVBPy3NVabkarHIgBSEWQqDVZpJsOKaZCjniSYLow2Zwa7Lli3uD7H4//cXqfv145F/zu2NeRvXY7N17xg6/8uTlalIDXONkYsINrTxQS3Cyvqc8FeMVUV0m8oDv6zfJLv3wfno/5uWxXyu7fI939yqOtToLQoTL2SrAR2g1wUEey20uCwYBu59OTEwBvd9dX/p7UH/mkpTvm9oKPiv7erwY3KRKv1hZGmy+VFuAXBEWmlxIhhoIOdKdirZuZGYa5udv+bKn3/50c6/MyJDPpbnef9tzrZ529RdPDfEneT/xvm5f3Py/T7DlQOdp6RiT6mgSaW5mCvmluZ+2kam/1X0zb8szRC7d8SV6G/0cYaf32crf/2O4r/PRgv/bvFT/e/jr5xMEh9XoAxM1Yv80nIM3x5tAHM1rSymuCjqPB/q5fw7/VCDH8r1Mz+1To6/92oyPDvQIzkv9XGvP8DVWUWpyYoSoHUR9tIMWI1VFldC2wbh46RXZS4xP8pDAz/2xgY/uaEZ/9N8gn8Gywt97eQk/dXJgfv0zBPq//e9gbZIPXuNvqYrlTU1GXw8bQFS1g42ZQnOxj895M3veVj7/9f1sDst5Kx7X8br8DdDEx8Ugw6xpIM8triglI6PCD17FK62GPawMwY7HQ+HVEpP/PAufNKln9c07f3X1/+jJ/T6pb8aUvo+BqgFxKJrEdWSRd3GkxnUGPoy+0Fu7LHvWVGRWTt/6rExn+Li1f+n1+57H9McNJ/J0uPJSD5jOgEFhlZJbA+LW1t7AZ6mOoySIjrgV0pyKFnmBbm8tfWzvyqp0vcjOiA/EO+vg7fy9OdbpvoKOmACwcXfUacrjPgUocYaqMOdqGVtrhbV23kf28f+1KYGldn26KydL//Bsb6gSC+k4M5s6iiJnYDaywLGKxVGGA2cpWHmt5JCnd9Bky7YjA1ga6G6yJdTC7BNTHy4S9pMix0wK7zVWJwrYtz/G9ma1MCkxNi11Kojyz63x5d/dXO3iMBJLarfQEjThfW6+WCaWBBxDotpmFtS3z9fyEFJTuYPL+4hERMQP7igrTyn+7efhtBYv///2cQU9LCbmC+Wy7YdaGagfEHe3b+n9g45z+fghzYQA09UxYkpRIM7CLcEFvEcHtX3dgUEn6i/PwunoHr7V28ZgB54PytrmfEwCoiyvD/zH94rAopQ9KfkqkTijkA04guWvl0eQ4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 JiEovDUZyrhOyrc8EJAH5g"\n        title=""\n        src="/portfolio-2018/static/1*JiEovDUZyrhOyrc8EJAH5g-19b43a69fae914333c78f8b189d78356-082ce.png"\n        srcset="/portfolio-2018/static/1*JiEovDUZyrhOyrc8EJAH5g-19b43a69fae914333c78f8b189d78356-c7cb1.png 158w,\n/portfolio-2018/static/1*JiEovDUZyrhOyrc8EJAH5g-19b43a69fae914333c78f8b189d78356-93041.png 315w,\n/portfolio-2018/static/1*JiEovDUZyrhOyrc8EJAH5g-19b43a69fae914333c78f8b189d78356-082ce.png 630w,\n/portfolio-2018/static/1*JiEovDUZyrhOyrc8EJAH5g-19b43a69fae914333c78f8b189d78356-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*G-RzM3iSz_Ne5WWRLYMFrA-d1b17abf5c4a35f061546e2a940f1f7e-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE3klEQVQ4y41Ue0yTVxQ/X0vRgVYptJQ+6LtYtC2lhYIMWyqvUleB2lFKqRSwWKSASFEEEXzEapxT0Og0iHFMt0R06uaMWabu5f5ZnMucMcuymGxLjFm2ZJlTy3fv+n3OTSfJvMnNed3f756Te88BmGF1JQv+0c9UeBlPx3pFMoKS5+3LwApJ8EJrUpNPy8uuFhpsARD4IKE4rrIpe7XMQF8SstTCC6+jxgomnZHM6B/kqX7cxskkD9lbP39C2p5bQZOmZqpmQOdwAAwcWl2knAcuPpvAGFPm7LM1HTe/j57D26W6h2+6G/DeSttVAGsyFXSYKojnuVamM25hJeHewydUPUKGIiBlfBNdT2c3vmRF/709F/GNXcceTLU3kWtzzA+udG/GtWLNCBU/kF3IBK0knkUKgHTO/9TMA2VUqL7+WTiEpyK+6XOdLjSsz49N8GR4gMn6Csz+We7oXMIRSGdgvAicg1xGmiWVANUacaFxLf+8JMCfgG7FyxqPsErRyLvA8wl/L6pk403cZPINuQSdZiagMQA0AYD3QsKfDkiaO2MiEouw17VbgLsOcnHdDi42rRZjVliFoS++16hJlU+ABA4O8qfNRqPAJE/HCXcA86f5cokFlmUGhTXckbw27heiam7/S3mpCyClXLWF26rGOVvkD/2HJdPiJgEJ3eppRp8aQasUMSKUVCEIyVGFMoVcLp2H2QUZvzFrJQ/Tgmps2yjEHcfScXAiA+vc6edAlbRgXqJNdgY8cgy+TCzyF+DEKjmCDhmCMiECGw9BowixPEoENXHfChkJqxQY2hS4KCoih0+mkeFRHm7awiPza0X9j8vWGuanaaU6KJoz5RzowQOHDpAG7yvkyOQ4Co/tR7mRIbIg3EMKS3QkROKkg2oSghLEXiW/v3on/w+LV3SNrZKX0GQphgVPt5Zkw/FDv45eOo2Hjx4kz978Gg1/cgtZt+4l5TkGlO1Ygma5leSccnVM77diYUH2VByTCVCQSIGnbnMe/0tlVXUCJTkGc6D1+Pt4/eSJ6ZY9u8m6U1eRbf/byDk+hZyRLuRb14Jcnc0oU2cg6/v7sX33vphmaUMBhTX7LCwABYBwkRm+LH+VZrbJde81bRvD/gs3Y57xcVTeEkD+5kay/uRHqPnMNdQ61Env2s5GVDP+biz46V2c7W64HofSVSZlCQEIFutJuayyFfW3PUfewt4PbsSq37lIrnQ2kNGtO0nvqQ9jgcnzj1pHukn/5g7kCLchx1AIVW4YmM7I1uMMiSaX7gWJhgHaUBPdZpxBp8HUHbmX396Lres24rLeCK4Kd6DilUFcP7QBO3u8uK5vFXaNjqLSvqGYzm555O0PYGd7I5YWmvZRHDq39fF7xKdaqqm987vmY6dwZciDs8w5d8r9y3/xrGvGxV77fZ29+JJcq9luDXb93HjyCna/dhiLTSXRXFfpt4XLHKS+pGSA4vH2hf5+lNz8hQutSy/n2W13jNW21+P8ycAXqsXZxtJEkURLnYmfnF/W1nXXe/AELura+jHlE2fkp6fw1Zp/P0l8CBlLnhlBjJnakxplc+WaWYvLyupMRUWRuOuZPvZu6v3PCLOUEkfwD7TeNtZDsEUKQpxrILLMixkCvS5uK5+7hCvLImR6IyHVmgil3kT7FPo8+AvXEbxbhBTyKwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 G RzM3iSz Ne5WWRLYMFrA"\n        title=""\n        src="/portfolio-2018/static/1*G-RzM3iSz_Ne5WWRLYMFrA-d1b17abf5c4a35f061546e2a940f1f7e-082ce.png"\n        srcset="/portfolio-2018/static/1*G-RzM3iSz_Ne5WWRLYMFrA-d1b17abf5c4a35f061546e2a940f1f7e-c7cb1.png 158w,\n/portfolio-2018/static/1*G-RzM3iSz_Ne5WWRLYMFrA-d1b17abf5c4a35f061546e2a940f1f7e-93041.png 315w,\n/portfolio-2018/static/1*G-RzM3iSz_Ne5WWRLYMFrA-d1b17abf5c4a35f061546e2a940f1f7e-082ce.png 630w,\n/portfolio-2018/static/1*G-RzM3iSz_Ne5WWRLYMFrA-d1b17abf5c4a35f061546e2a940f1f7e-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/portfolio-2018/static/1*2VEJ6pU90cKR3XoQWusyBw-6ed119966c96d9f1ac4a1c246b734010-d67ba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFBklEQVQ4y22TeVBTVxSHbwgkMbJEJIGQNIEkYEJIQkJkRxaLDosQKCgiBgvOUDcqtqNoFxWlLhWH1qWigy2LC8qgMWNkBFERqxGqgFpsrSgaB2S6WKiOxLx3mrwQp1buP++ce8753u+eew9iCoKQbTEFUh9vgSSDcGI3IyWZsJCHDw8JI1KQkxMJeflJEEsoJzHYfkSMLZ6JXKf7oLeW7wyZE/ENDM5mi5XgKVJIbb5SIXUqiWWiwhAv9PVCPunb8jCyo0aStJzk488jbK407G2gq2AWyfZ15ymquWIVSPy5i23+tvYNZABAFlOe03/SqRy+O9fhaNRs0pY5TML+bLa3fbO5JpwABqpCdLo9bNhdSD48kU9xFM5zR+I8jbByZkLiba+gFGCKVI0iNqI64itDPQhGRba1FcNNiFBQlOm982UnFepWuwzUl8l36qvi+horVI2nKlSV15vSx4b7FkDRKi24BWYCJ1BZMcGytcHZZiwR0QgoWhI9xa4QId6JLz1MnfVqeNSdD88fFIK+fg70tGbAyO08OHooY8w3KLqDJZAtdiir2xh25FhFpGECjFaFeiA0X0EjFMYzUOjqfOnY+ZNJ+MNbBeafLmS/DlBFmTeUxb5qOvg+WO87ywHKtraj/Ttp7ejAUnjao4Udi0Sf2vZPbIsiI23qDAKYGemjLV4SD2frks0th2Kx3svzsXVrE7HmvXHm64djoHA2Y7ktb+MHIvXVH0LuvBosgH+eLDO/eFwMLXvjL1lD9iNDWzRhrE/wPHX3eDDUl/uZm8sZ2JUDQrxXr8T0Sg/z+VAXyF3Ab7Dl1ZarB29d0cLo45Xmu50Lxwf7CuDy0WQ8z48qJ4DtSWRC4XKuy9Ybu53h/hkXy0M9Dfu91QV/1uaM/7iMbL77BQWyMnxrjpV6fPP8ohs8ahOOm7rToKstB2r2p0Lpipi9jj6imTESu1S0nrajjN8/1EKFR1boSCsdHzpPx4cvUSxjxqmwpVTWuynfw/CigwpPDc6WxkrWq5IVkXqmQJ7g6K3Sj0NCFM9Ah0/6anNS9/2O2dB/mvX6z4tT8KFzVPxWg5tl8GoiHPk+a8ya41W1jFptqHQFuZCT6ygEOIbckLvdKdbKCIUsL0aQ0ZA+0qNPg4GufMsf9xbi/adVeP/VXOyecRHeeSbrdYBQULRvleupByeosCZ9yn5b3a61fGcKjUWwWELr1M6KEhNnd2P4pp2tT4Y7rfMsvYZ5eNeZLNyo02DP+gtw43E11qFPwT9ZxIbfDjjDno+oLZqIaRqEthNiAkR+aBrHf2JslkYRwPgYRUn1phg4uUtpNjbNxZoPJ+N1O9XYhZp4rL0p0/KzjgMlH7KGcyJ4fyVK+Y1vppsuQ5MsOnP/ZumTAWMudDSkWgZuFmFD91daWmtTLe3H52LdhlmY6Rwd31fGGI+T8F+mhAuOWl8uMXI8iRSJhe/9H6ji1G5ljozf5IKpK2b86Y0E/HlvPIz2KOBBq/94n05gMbW4wrmqqcARBLwZPeQd+q623Wu9iXeYHsuqOLnNFX5tIINuOx0vX+39uHod9e9fGmlg0lEsF/dQoFgz/aD9Vm33HWy/TGHwu9AQGqJrUwKufZ7LwXLCfK6xvCU59oiMG+vPXFNd6jla9TEPpnHVxFMJV0uJvvsKxWjSZfuhLCZSHqEWhU8WD44Oy0hLDmlKTFIpiNNowklhct6krH8BhEDyWUSinxYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 2VEJ6pU90cKR3XoQWusyBw"\n        title=""\n        src="/portfolio-2018/static/1*2VEJ6pU90cKR3XoQWusyBw-6ed119966c96d9f1ac4a1c246b734010-082ce.png"\n        srcset="/portfolio-2018/static/1*2VEJ6pU90cKR3XoQWusyBw-6ed119966c96d9f1ac4a1c246b734010-c7cb1.png 158w,\n/portfolio-2018/static/1*2VEJ6pU90cKR3XoQWusyBw-6ed119966c96d9f1ac4a1c246b734010-93041.png 315w,\n/portfolio-2018/static/1*2VEJ6pU90cKR3XoQWusyBw-6ed119966c96d9f1ac4a1c246b734010-082ce.png 630w,\n/portfolio-2018/static/1*2VEJ6pU90cKR3XoQWusyBw-6ed119966c96d9f1ac4a1c246b734010-d67ba.png 661w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The same sprites with next-best colour matching for invalid pixels</p>\n<p>Naturally, I went through quite a bit of trial and error to get to this stage — I tried selecting average pixel colours from neighbours, but that generally lost details, and I tried some complicated contrast-based comparisons to bleed similar colours into neighbouring invalid pixels, but that didn’t work well either. The simplest solution was the best — calculating a prioritised list of matching colours for each brick, and regressing through that list whenever the bricks we wanted didn’t actually exist.</p>\n<hr>\n<h4>Making the jump from theoretical to physical</h4>\n<p><em>Finally,</em> I have a working sprite-to-lego-brick conversion tool at my disposal. It calculates nearest matching bricks, does some optimisation, and spits out a sensible shopping list of items to purchase.</p>\n<p>Placing my order with the online LEGO store was (unfortunately) a fairly laborious process, because there doesn’t seem to be a nice bulk ordering system, but after about half an hour of manual entry I managed to get every individual brick in the basket. £37.69 paid to the LEGO store online and in the next 7–10 working days, the raw materials for my new creation should be with me.</p>\n<p>My LEGO Pokemon sprite tool is online, if you’d like to create a pattern and see the list of Bricks for it yourself: <a href="https://www.pokeproject.co.uk/lego/">https://www.pokeproject.co.uk/lego/</a></p>\n<hr>\n<h4>Beyond Pokémon 🔮</h4>\n<p>The exciting opportunity for this project now is that I have the start of a fairly generic image-to-LEGO pattern generator, which I might evolve into a proper standalone project over the next few months. After all, wouldn’t it be fun to turn more Retro games artwork into LEGO patterns? or webcam images, or profile photos or works of art? So many possibilities!</p>\n<hr>\n<p><strong><em>Expect Part 4 within 7–10 working days.</em></strong></p>',frontmatter:{title:"PokéProject: Adventures with LEGO Bricks",date:"June 07, 2017",tags:["Lego","JavaScript","Pokemon","Pixel Art","Hackathons"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-pok-c-3-a-9-project-adventures-with-lego-bricks-c-7-b-9-b-8385276-274037ef6331bfcfc34a.js.map