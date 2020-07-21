const path = "assets/img/bg/"
backgrounds = [
    {
        "name" : "Daniel Mirlea",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/fcPTjUQa7hY",
            "cdn" : "https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
    },
    {
        "name" : "Daniele Franchi",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1594795576050-76e7077f1685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/OnIvzd6u7RQ",
            "cdn" : "https://images.unsplash.com/photo-1594795576050-76e7077f1685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
    },
    {
        "name" : "Graham Klingler",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1594800277934-8bf755112e0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/nKifzMGG-Fs",
            "cdn" : "https://images.unsplash.com/photo-1594800277934-8bf755112e0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
        }
    },
    {
        "name" : "Jeremy Bishop",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1594878323962-561fbd6357d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/DCgpO14uTeQ",
            "cdn" : "https://images.unsplash.com/photo-1594878323962-561fbd6357d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
    },
    {
        "name" : "Eric BARBEAU",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1594624198301-bf7dcc271fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/IOP9IQZb_VY",
            "cdn" : "https://images.unsplash.com/photo-1594624198301-bf7dcc271fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        }
    },
    {
        "name" : "Vino Li",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1594866168562-b2a203b6fb2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/DpaDxjOq2c4",
            "cdn" : "https://images.unsplash.com/photo-1594866168562-b2a203b6fb2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
    },
    {
        "name" : "Green Chameleon",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/s9CC2SKySJM",
            "cdn" : "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
    },
    {
        "name" : "Aaron Burden",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/6jYoil2GhVk",
            "cdn" : "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        }
    },
    {
        "name" : "Javier Allegue Barros",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "origin" : {
            "source" : "https://unsplash.com/photos/C7B-ExXpOIE",
            "cdn" : "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
    },
    {
        "name" : "서울대학교 캠퍼스",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F161CBA344FF63CEE34AE52",
        "origin" : {
            "source" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Flenfrid.tistory.com%2F55&psig=AOvVaw35tPirebhNIejwvSYAQMYN&ust=1595399580031000&source=images&cd=vfe&ved=0CAMQjB1qFwoTCKC76Ofc3eoCFQAAAAAdAAAAABAD",
            "cdn" : "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F161CBA344FF63CEE34AE52"
        }
    },
    {
        "name" : "고려대학교",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://pgnqdrjultom1827145.cdn.ntruss.com/img/66/dd/66dd1c72e5ce5617bf0022c575e527bffedfff36a1e9cb3b55299938bf85493c_v1.jpg",
        "origin" : {
            "source" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnotefolio.net%2Fsinjunpic%2F21530&psig=AOvVaw0-G0iLdGAZt9yzZB9sxQ0V&ust=1595399647515000&source=images&cd=vfe&ved=0CAMQjB1qFwoTCICEhIvd3eoCFQAAAAAdAAAAABAD",
            "cdn" : "https://pgnqdrjultom1827145.cdn.ntruss.com/img/66/dd/66dd1c72e5ce5617bf0022c575e527bffedfff36a1e9cb3b55299938bf85493c_v1.jpg"
        }
    },
    {
        "name" : "연세대학교",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2671BB3F5729F87713",
        "origin" : {
            "source" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fyunpark.tistory.com%2F70&psig=AOvVaw3ec2tDLmH3ML76cQRYSOZ2&ust=1595399707011000&source=images&cd=vfe&ved=0CAMQjB1qFwoTCLCvrq7d3eoCFQAAAAAdAAAAABAD",
            "cdn" : "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2671BB3F5729F87713"
        }
    },
    {
        "name" : "건국대학교",
        "author" : "Unsplash",
        "license" : {
            "name" : "",
            "url" : "https://unsplash.com/license"
        },
        "url" : "https://s3.orbi.kr/data/file/united2/7cfb2289-6436-4dc9-872a-30d81d2ec7f02.jpg",
        "origin" : {
            "source" : "https://www.google.com/url?sa=i&url=https%3A%2F%2Forbi.kr%2F00022946242%2F%255B%25EA%25B1%25B4%25EB%258C%2580%255D%25EA%25B1%25B4%25EA%25B5%25AD%25EB%258C%2580%25ED%2595%2599%25EA%25B5%2590-%25EC%2595%25BC%25EA%25B2%25BD-%25ED%2581%25B4%25EB%259D%25BC%25EC%258A%25A4-%25E3%2584%25B7%25E3%2584%25B7%3Ftype%3Dhot&psig=AOvVaw39F4vNeSyX1khA1p32rNjx&ust=1595399788475000&source=images&cd=vfe&ved=0CAMQjB1qFwoTCNiKh7be3eoCFQAAAAAdAAAAABAD",
            "cdn" : "https://s3.orbi.kr/data/file/united2/7cfb2289-6436-4dc9-872a-30d81d2ec7f02.jpg"
        }
    },/*,
    {
        "name" : "",
        "author" : "",
        "license" : {
            "name" : "",
            "url" : ""
        },
        "url" : "",
        "origin" : {
            "source" : "",
            "cdn" : ""
        }
    }*/
]