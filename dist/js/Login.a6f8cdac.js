(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{2449:function(e,n,A){},b461:function(e,n,A){"use strict";A.r(n);var t=A("7a23"),o=A("c4f7"),r=A.n(o),c={class:"login-container"},i={class:"form-container"},s=Object(t["createElementVNode"])("div",{class:"icon-container"},[Object(t["createElementVNode"])("img",{src:r.a,alt:""})],-1),a={class:"button-container"};function u(e,n,A,o,r,u){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",c,[Object(t["createElementVNode"])("div",i,[s,Object(t["createElementVNode"])("div",a,[Object(t["createElementVNode"])("button",{class:"login-button",onClick:n[0]||(n[0]=function(){return o.onLoginCLick&&o.onLoginCLick.apply(o,arguments)})},"sign in")])])])}A("2449");var l=A("b628"),U={name:"Login",components:{},setup:function(){var e=function(){l["a"].loginWithRedirect()};return{onLoginCLick:e}}},B=A("d959"),b=A.n(B);const p=b()(U,[["render",u]]);n["default"]=p},c4f7:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAeCAYAAAArUOB+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnjSURBVHgB7ZoFqFXbFoanXm932C0GJnZ3t9gKdrei2N2YGGCBYqBio2Kg4rEbu7s7sNvxxjfuW/vtk7rP9Ty3XH8Qda+1Zoz4R8zp5DPD5cuXpXz58tKlSxd5+/atxCSeP38u7du3l5IlS8qlS5fkEyPEyWeEN2/eSI0aNcQ5J7lz55YnT55ITGL48OESJ04c+frrr2XLli3yiRES231GmDp1qlOhufjx47u4ceO6H374wUUX6pVu1apVrnfv3u706dPhnp89e9aNGzfOJU+e3P3111/ujz/+cJ8acdxnghs3briBAwe62rVru+XLl7vs2bO7WLFiuejg6dOnrnv37m79+vVOadV9++23rl+/fr7n7969c506dXJZsmSxZw8ePDClfWp8Fp6lFOCGDh3qvv/+e1e0aFF369YtV6ZMGRcdoKhmzZq5RYsWuUGDBrnff//dJUyYMNQ727Ztc2vXrnXt2rVzx48fd3ny5HE//fST+9T4LJS1f/9+N2PGDNenTx/796+//upy5crlAoUmDK5t27YuJCTErVmzxh06dMj98ssvrlq1ar53Xrx4YV5XqlQpM5JHjx65ihUruqCABDmUkqRz586SNGlSuXfvnqRPn1569uwpgeL169fSo0cPSZIkiezbt0+uX79uY2pcCvXeypUr5ZtvvpE9e/ZI06ZNLZEhsQkCBH82SMr822+/yahRo2TFihWWme3duzegMVC4eqZo/JENGzbY/xs2bCgak0JllJQCxYoVk2zZssnDhw9NscOGDbP3gwDBrywsH6FpnLJ6J2/evKJUFdAYeMnPP/8sgwcPNsErDYrGIFOcPw4fPiyaYcrixYtFM09RipQTJ05IkCC4lQV1pUyZUho1aiSaXkvs2LFl9uzZAY9RoUIFKVy4sNHZzZs3JVWqVNK8efNw9AZN4m0apyR16tTSqlUrefXqlQQJgltZeASWvm7dOunQoYPPwwKBJhJGozt37pSXL19KmzZtzACIf/5AKcQwzRDtXeKWpvYSRAheZeERWH++fPmMijQDlGnTpgU0BsopXry4VK5c2bxo+vTpprjNmzf73vHiEdQH7R08eNC+0RLB1hBEiHllRTc4X7x4UdKkSSMjRowwekqQIIFojfTB3zMvmR3KIUaRlKAMPCcs/fFuvXr1TEEoTes52bVrlwQZ/rmysL6rV69a0/NjYv78+Za9aUvIvGrWrFkBfY9XlS1b1rzk2LFjkjhxYvOwiBR+5swZSZs2rfTt29cyQS2432tkJDkkKJMnT5Y5c+aIdlgkhhFaWSxAq3dp0qSJbYx0mU1HBQI3QqXhWbBgQdGK3/eM9PfcuXMSHTRo0EDy588v2j0wgQeaAbIPPGn8+PGiBbStMzKDWrJkiZUEdPKTJUtmyosKBw4ckBQpUsiff/5piYj2KS0OxvApwP+URYDVyl1+/PFHKVSokCmLf0+YMCHSr7E+6AqeX7ZsmXz11VcycuRIy6bwhJw5c0qOHDkiVTjfR2bBGTNmFG0DmUACratAr169jALZC2sgMYlsLmiWVF5bTzJp0qQoxz1y5Iiti2OakydP2pjaWbGTAIrt6OIDwsXfyuLFjh072uZQDsKG10uXLi3Vq1eP8EssnUKzW7duMmXKFNHenWhjVbRNI9pktc3jbS1btozw+2vXrkmdOnUiVATrwSsQQP/+/aPcCPRDbAr7DokJ8+Mp3hwU1VWqVLEYBjAibV+Z1zEXzMDeIwN7pgzAi+7evetba6ZMmez7MWPGRPgd85DNIquIgCHVr19ftB8Z4fPt27fLs2fP/lbWkCFDTDhLly71vXD//n3bKBYUFmyQjUF/0BRCoQZiE8QJFEfmhqVGtMDz588bxfE8LOUgkBYtWviEF1Wrh3EyZMggJUqUCOe97IdUn7V62LRpk42LUeGxJBIYFTHxu+++i5KyWRfhgW/95YSh6vGJ7Z3WFPHbA4rksBSD57vWrVuHG/fOnTtW7LNeShV/sCdabTBWCA3NK1euWPDt2rWrzzqhROiMjUGNHuBkPZ6wLA2uXrhwocybN8+Ezvv02xAuG2vcuLHVSBSz/kA5dCH4ZsGCBaGeYdXaEbd5MQQOGiMD3QbGYS3akA33nDopbN/vwoULZlh4K3GKPyiTEgFWiYyuMVxOjDFIhH7q1Cn7HdpLlCiR7XX16tUWNmhXEQKQE60q1uftJ2zHBEXCRHRXZs6cGerZ48ePffSKblSmIQ6aypw5s2kYkN0xCVbHi7RdUAAD09jEAqECrJo0F8ucO3duqIngchSFUDx4bR49FwpnBAAqgHa99BpaZg0IxjMi/qaXR51EgC9QoIBv3WGhB5SW9vsDQ8FKoUN/bNy40RIMTob918u+jx49auyCUuieMG6RIkVEz9YkXrx4tgY977JvWBfP+N1LPvAmxoZh/PexY8cOnyL1KCZUcgLFUkqgRGLvfxHi8CpvU1gWFMbgY8eONYpjwHLlypnl8S6pKpvgmBvrhe7Cxgu8DSV6bk1WiAJ4n7HJnrxOhP/CsUw6DgBjIPalS5fOLJWuAjESYWClCAGLjwy1atUyK/fveHjN3LDeDpNgHNAZIYEYQclQt25dWxPxD6UBskxol+QJuYUtBRD67du3LZbCMIzFnFu3brXnGNvEiRPtN+SBp+LxHpiHGIhTUBL4IcTxI7zLpLg6lg19oBDoBb5l4/xGUuBlgPTQEFhE6SpCwSvYOF5KXMGCCKKVKlWy7IxxoE0yMawQQ9i9e3coxevRuvE5a4S+sGqoEUN5X3eBpAOBIFDPI1kzCUZEcRAK1tNhi1/MhbGRSUJPGJs/mPtDSwmSBpQyYMAAGT16tO0dWdSsWdPok/mQIUaFo+CVNABosYVxghBXtWpVs3YEQkr6vkYpXIqnIUTNUCJ8hzhIAoE3MjlzeB0BrAoq4hlCwcugy6iyMBYdaJ2FAKBwhAH1omi89EPqPub6WMcisBWdEU8WFNxezxHvxbM8WeDZeLhHq2EQEgtvIdEAWnyGO+L2B5dMlHudZkN2cUUbn5G+q4t0Gk+c0ojTxfjuS6iy7ZRWFQoFO6W1KOf8J9ANOqUV+6PJgc2lVuv+3/BkwQUfrhF4slAPdRo/nTKVyUA9OSqZbgqo3UTcwPtoiL7P8qBViuWYvi72L0JgV9E0VbcrWUprUd4sUo53Sm1OA7FZ9Rd8HAR0FY37dXpwZ9QWGbT2cFqt2w0kzRSdForuCz4OAvIsLlZqE9OuahF74GJNe+1enVKeXd3Cm7Tz4TRltVtD0b3b9wXhEZBnadpsFyO1SHTaXrGASeCG9i5duuSyZs3qtMZymi3a71/wcRGLyBXIB9Cb1gBO2z1OkwenabjTsyCnzVCnqbFdxPyCGMGm/wDmqOY9SfI0pgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=Login.a6f8cdac.js.map