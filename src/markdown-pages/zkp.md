---
title: "ZK Plug White Paper"
date: "2023-03-21"
---

We have done many wonderful things with blockchain in the last couple of years with Defi and DAO, and many more. However, it seems that the community has focused too much on the currency side of cryptocurrency, and forgotten why we need cryptocurrency in the first place.  
<br/>
It's privacy, that's the reason why Satoshi Nakamoto created bitcoin. No one can deny that the amazing work DAO and Defi. The only issue is that there are no privacy. All of your trading strategy is going to be public on chain and everyone can see it, and it's going to be very awkward to vote on a DAO that people can see who you're voting for. So the need for privacy is in demand. The answer for this problem is zero-knowledge proof. However, to be able to implement the zero-knowledge proof on a smart contract is not easy. The developer need to have a strong math background (modular mathematics, polynomial, cryptography, ...).  
<br/>
Technically, ZKP is just math anyone can implement it any where with any programming language. But the smart contract developers already enough headache to implement the business logic into a smart contract, and the security audit as well.  So the ZKP many too much work for them. That's why we need ZK Plug, an API for smart contract developers to implement ZKP into their smart contract.  
<br/>
<p style="text-align:center" ><img src="./img/ideal.png" width="600px" style="margin:auto"></p>


How can we build a zk plug ?  
One of the solutions is to use [Arkworks](https://github.com/arkworks-rs)  
Arkworks is a Rust ecosystem for zkSNARK programming. Libraries in the arkworks ecosystem provide efficient implementations of all components required to implement zkSNARK applications, from generic finite fields to R1CS constraints for common functionalities.  
<p style="text-align:center" ><img src="./img/arkworks.png" width="600px" style="margin:auto"></p>



