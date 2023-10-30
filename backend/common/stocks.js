const stockList = [
    {
     "number": 1,
     "ticker": "RELIANCE",
     "name": "Reliance Industries Limited",
     "market_cap": 157706937.768198
    },
    {
     "number": 2,
     "ticker": "TCS",
     "name": "Tata Consultancy Services Limited",
     "market": 117305527.967007
    },
    {
     "number": 3,
     "ticker": "HDFCBANK",
     "name": "HDFC Bank Limited",
     "market": 89808750.01206301
    },
    {
     "number": 4,
     "ticker": "ICICIBANK",
     "name": "ICICI Bank Limited",
     "market": 61248250.4476975
    },
    {
     "number": 5,
     "ticker": "HINDUNILVR",
     "name": "Hindustan Unilever Limited",
     "market": 60157759.876617
    },
    {
     "number": 6,
     "ticker": "INFY",
     "name": "Infosys Limited",
     "market": 59239363.148297995
    },
    {
     "number": 7,
     "ticker": "HDFC",
     "name": "Housing Development Finance Corporation Limited",
     "market": 48048335.387215
    },
    {
     "number": 8,
     "ticker": "ITC",
     "name": "ITC Limited",
     "market": 47632201.21842
    },
    {
     "number": 9,
     "ticker": "SBIN",
     "name": "State Bank of India",
     "market": 46742655.004325
    },
    {
     "number": 10,
     "ticker": "BHARTIARTL",
     "name": "Bharti Airtel Limited",
     "market": 41757758.5285
    },
    {
     "number": 11,
     "ticker": "KOTAKBANK",
     "name": "Kotak Mahindra Bank Limited",
     "market": 34423149.0679545
    },
    {
     "number": 12,
     "ticker": "BAJFINANCE",
     "name": "Bajaj Finance Limited",
     "market": 34005446.4445275
    },
    {
     "number": 13,
     "ticker": "LICI",
     "name": "Life Insurance Corporation Of India",
     "market": 33797625.215293504
    },
    {
     "number": 14,
     "ticker": "LT",
     "name": "Larsen & Toubro Limited",
     "market": 30416456.170307998
    },
    {
     "number": 15,
     "ticker": "HCLTECH",
     "name": "HCL Technologies Limited",
     "market": 29450050.45434
    },
    {
     "number": 16,
     "ticker": "ASIANPAINT",
     "name": "Asian Paints Limited",
     "market": 26489685.767535
    },
    {
     "number": 17,
     "ticker": "AXISBANK",
     "name": "Axis Bank Limited",
     "market": 26412099.823345
    },
    {
     "number": 18,
     "ticker": "MARUTI",
     "name": "Maruti Suzuki India Limited",
     "market": 25048931.69529
    },
    {
     "number": 19,
     "ticker": "SUNPHARMA",
     "name": "Sun Pharmaceutical Industries Limited",
     "market": 23587862.09007
    },
    {
     "number": 20,
     "ticker": "TITAN",
     "name": "Titan Company Limited",
     "market": 22326934.13784
    },
    {
     "number": 21,
     "ticker": "DMART",
     "name": "Avenue Supermarts Limited",
     "market": 22031141.128255498
    },
    {
     "number": 22,
     "ticker": "ULTRACEMCO",
     "name": "UltraTech Cement Limited",
     "market": 22003819.6525775
    },
    {
     "number": 23,
     "ticker": "BAJAJFINSV",
     "name": "Bajaj Finserv Limited",
     "market": 20173007.8009
    },
    {
     "number": 24,
     "ticker": "WIPRO",
     "name": "Wipro Limited",
     "market": 20044619.5490025
    },
    {
     "number": 25,
     "ticker": "ADANIENT",
     "name": "Adani Enterprises Limited",
     "market": 19955149.6225445
    },
    {
     "number": 26,
     "ticker": "ONGC",
     "name": "Oil & Natural Gas Corporation Limited",
     "market": 19002511.740663
    },
    {
     "number": 27,
     "ticker": "NTPC",
     "name": "NTPC Limited",
     "market": 16978862.400634
    },
    {
     "number": 28,
     "ticker": "JSWSTEEL",
     "name": "JSW Steel Limited",
     "market": 16632893.84764
    },
    {
     "number": 29,
     "ticker": "POWERGRID",
     "name": "Power Grid Corporation of India Limited",
     "market": 15743597.114048
    },
    {
     "number": 30,
     "ticker": "M&M",
     "name": "Mahindra & Mahindra Limited",
     "market": 14408768.564797
    },
    {
     "number": 31,
     "ticker": "LTIM",
     "name": "LTIMindtree Limited",
     "market": 14079902.960088
    },
    {
     "number": 32,
     "ticker": "TATAMOTORS",
     "name": "Tata Motors Limited",
     "market": 13976216.9196
    },
    {
     "number": 33,
     "ticker": "ADANIGREEN",
     "name": "Adani Green Energy Limited",
     "market": 13957702.179897
    },
    {
     "number": 34,
     "ticker": "ADANIPORTS",
     "name": "Adani Ports and Special Economic Zone Limited",
     "market": 13649917.993455
    },
    {
     "number": 35,
     "ticker": "COALINDIA",
     "name": "Coal India Limited",
     "market": 13166669.070635501
    },
    {
     "number": 36,
     "ticker": "TATASTEEL",
     "name": "Tata Steel Limited",
     "market": 12771501.59835
    },
    {
     "number": 37,
     "ticker": "HINDZINC",
     "name": "Hindustan Zinc Limited",
     "market": 12394973.2865
    },
    {
     "number": 38,
     "ticker": "PIDILITIND",
     "name": "Pidilite Industries Limited",
     "market": 11960634.0672
    },
    {
     "number": 39,
     "ticker": "SIEMENS",
     "name": "Siemens Limited",
     "market": 11848655.0642325
    },
    {
     "number": 40,
     "ticker": "ADANITRANS",
     "name": "Adani Transmission Limited",
     "market": 11077400.0885315
    },
    {
     "number": 41,
     "ticker": "SBILIFE",
     "name": "SBI Life Insurance Company Limited",
     "market": 11020676.345678998
    },
    {
     "number": 42,
     "ticker": "IOC",
     "name": "Indian Oil Corporation Limited",
     "market": 11000444.700357
    },
    {
     "number": 43,
     "ticker": "BAJAJ-AUTO",
     "name": "Bajaj Auto Limited",
     "market": 10992185.964905
    },
    {
     "number": 44,
     "ticker": "GRASIM",
     "name": "Grasim Industries Limited",
     "market": 10750221.321201999
    },
    {
     "number": 45,
     "ticker": "TECHM",
     "name": "Tech Mahindra Limited",
     "market": 10733643.9532875
    },
    {
     "number": 46,
     "ticker": "HDFCLIFE",
     "name": "HDFC Life Insurance Company Limited",
     "market": 10729623.91488
    },
    {
     "number": 47,
     "ticker": "BRITANNIA",
     "name": "Britannia Industries Limited",
     "market": 10410689.055564
    },
    {
     "number": 48,
     "ticker": "VEDL",
     "name": "Vedanta Limited",
     "market": 10201852.762535501
    },
    {
     "number": 49,
     "ticker": "GODREJCP",
     "name": "Godrej Consumer Products Limited",
     "market": 9901224.721216999
    },
    {
     "number": 50,
     "ticker": "DABUR",
     "name": "Dabur India Limited",
     "market": 9654339.115335999
    },
    {
     "number": 51,
     "ticker": "ATGL",
     "name": "Adani Total Gas Limited",
     "market": 9543601.9952325
    },
    {
     "number": 52,
     "ticker": "SHREECEM",
     "name": "SHREE CEMENT LIMITED",
     "market": 9448447.438385999
    },
    {
     "number": 53,
     "ticker": "HAL",
     "name": "Hindustan Aeronautics Limited",
     "market": 9132457.0125
    },
    {
     "number": 54,
     "ticker": "HINDALCO",
     "name": "Hindalco Industries Limited",
     "market": 9109003.2502975
    },
    {
     "number": 55,
     "ticker": "VBL",
     "name": "Varun Beverages Limited",
     "market": 9009369.90384
    },
    {
     "number": 56,
     "ticker": "DLF",
     "name": "DLF Limited",
     "market": 8829448.733412
    },
    {
     "number": 57,
     "ticker": "BANKBARODA",
     "name": "Bank of Baroda",
     "market": 8731845.0392415
    },
    {
     "number": 58,
     "ticker": "INDUSINDBK",
     "name": "IndusInd Bank Limited",
     "market": 8285787.877861
    },
    {
     "number": 59,
     "ticker": "EICHERMOT",
     "name": "Eicher Motors Limited",
     "market": 8064561.276945
    },
    {
     "number": 60,
     "ticker": "DRREDDY",
     "name": "Dr. Reddy's Laboratories Limited",
     "market": 7698120.143285
    },
    {
     "number": 61,
     "ticker": "DIVISLAB",
     "name": "Divi's Laboratories Limited",
     "market": 7495107.15343
    },
    {
     "number": 62,
     "ticker": "BPCL",
     "name": "Bharat Petroleum Corporation Limited",
     "market": 7468737.197592
    },
    {
     "number": 63,
     "ticker": "HAVELLS",
     "name": "Havells India Limited",
     "market": 7446068.23613
    },
    {
     "number": 64,
     "ticker": "ADANIPOWER",
     "name": "Adani Power Limited",
     "market": 7389895.010956
    },
    {
     "number": 65,
     "ticker": "INDIGO",
     "name": "InterGlobe Aviation Limited",
     "market": 7366455.6470435
    },
    {
     "number": 66,
     "ticker": "CIPLA",
     "name": "Cipla Limited",
     "market": 7268331.08965
    },
    {
     "number": 67,
     "ticker": "AMBUJACEM",
     "name": "Ambuja Cements Limited",
     "market": 7258526.1346095
    },
    {
     "number": 68,
     "ticker": "SRF",
     "name": "SRF Limited",
     "market": 7149322.1417625
    },
    {
     "number": 69,
     "ticker": "ABB",
     "name": "ABB India Limited",
     "market": 7131034.6813125
    },
    {
     "number": 70,
     "ticker": "BEL",
     "name": "Bharat Electronics Limited",
     "market": 7130689.2476894995
    },
    {
     "number": 71,
     "ticker": "SBICARD",
     "name": "SBI Cards and Payment Services Limited",
     "market": 7002842.627378001
    },
    {
     "number": 72,
     "ticker": "GAIL",
     "name": "GAIL (India) Limited",
     "market": 6913717.275665999
    },
    {
     "number": 73,
     "ticker": "BAJAJHLDNG",
     "name": "Bajaj Holdings & Investment Limited",
     "market": 6588687.08551
    },
    {
     "number": 74,
     "ticker": "TATACONSUM",
     "name": "TATA CONSUMER PRODUCTS LIMITED",
     "market": 6585299.081025
    },
    {
     "number": 75,
     "ticker": "ICICIPRULI",
     "name": "ICICI Prudential Life Insurance Company Limited",
     "market": 6267855.572372
    },
    {
     "number": 76,
     "ticker": "CHOLAFIN",
     "name": "Cholamandalam Investment and Finance Company Limited",
     "market": 6258110.629178001
    },
    {
     "number": 77,
     "ticker": "MARICO",
     "name": "Marico Limited",
     "market": 6204090.835004
    },
    {
     "number": 78,
     "ticker": "APOLLOHOSP",
     "name": "Apollo Hospitals Enterprise Limited",
     "market": 6198412.778613
    },
    {
     "number": 79,
     "ticker": "TATAPOWER",
     "name": "Tata Power Company Limited",
     "market": 6079133.4881675
    },
    {
     "number": 80,
     "ticker": "BOSCHLTD",
     "name": "Bosch Limited",
     "market": 5712888.57436
    },
    {
     "number": 81,
     "ticker": "BERGEPAINT",
     "name": "Berger Paints (I) Limited",
     "market": 5650764.595245
    },
    {
     "number": 82,
     "ticker": "JINDALSTEL",
     "name": "Jindal Steel & Power Limited",
     "market": 5571721.185814001
    },
    {
     "number": 83,
     "ticker": "MCDOWELL-N",
     "name": "United Spirits Limited",
     "market": 5500954.501239
    },
    {
     "number": 84,
     "ticker": "UPL",
     "name": "UPL Limited",
     "market": 5386735.735636501
    },
    {
     "number": 85,
     "ticker": "AWL",
     "name": "Adani Wilmar Limited",
     "market": 5274745.6183925
    },
    {
     "number": 86,
     "ticker": "ICICIGI",
     "name": "ICICI Lombard General Insurance Company Limited",
     "market": 5252550.891585
    },
    {
     "number": 87,
     "ticker": "TORNTPHARM",
     "name": "Torrent Pharmaceuticals Limited",
     "market": 5202414.08096
    },
    {
     "number": 88,
     "ticker": "CANBK",
     "name": "Canara Bank",
     "market": 5160293.501814
    },
    {
     "number": 89,
     "ticker": "PNB",
     "name": "Punjab National Bank",
     "market": 5131133.250028
    },
    {
     "number": 90,
     "ticker": "TVSMOTOR",
     "name": "TVS Motor Company Limited",
     "market": 5117638.392008
    },
    {
     "number": 91,
     "ticker": "ZYDUSLIFE",
     "name": "Zydus Lifesciences Limited",
     "market": 4975489.4452545
    },
    {
     "number": 92,
     "ticker": "TIINDIA",
     "name": "Tube Investments of India Limited",
     "market": 4917996.110076
    },
    {
     "number": 93,
     "ticker": "TRENT",
     "name": "Trent Limited",
     "market": 4887774.8450195
    },
    {
     "number": 94,
     "ticker": "IDBI",
     "name": "IDBI Bank Limited",
     "market": 4838580.97875
    },
    {
     "number": 95,
     "ticker": "NAUKRI",
     "name": "Info Edge (India) Limited",
     "market": 4810235.30026
    },
    {
     "number": 96,
     "ticker": "SHRIRAMFIN",
     "name": "Shriram Finance Limited",
     "market": 4715537.113944001
    },
    {
     "number": 97,
     "ticker": "HEROMOTOCO",
     "name": "Hero MotoCorp Limited",
     "market": 4690937.620473
    },
    {
     "number": 98,
     "ticker": "INDHOTEL",
     "name": "The Indian Hotels Company Limited",
     "market": 4607068.509277
    },
    {
     "number": 99,
     "ticker": "PIIND",
     "name": "PI Industries Limited",
     "market": 4597362.411636
    },
    {
     "number": 100,
     "ticker": "IRCTC",
     "name": "Indian Railway Catering And Tourism Corporation Limited",
     "market": 4582400
    },
    {
     "number": 101,
     "ticker": "CGPOWER",
     "name": "CG Power and Industrial Solutions Limited",
     "market": 4582157.867717
    },
    {
     "number": 102,
     "ticker": "UNIONBANK",
     "name": "Union Bank of India",
     "market": 4548524.438623
    },
    {
     "number": 103,
     "ticker": "MOTHERSON",
     "name": "Samvardhana Motherson International Limited",
     "market": 4546978.736586
    },
    {
     "number": 104,
     "ticker": "CUMMINSIND",
     "name": "Cummins India Limited",
     "market": 4517251.2
    },
    {
     "number": 105,
     "ticker": "SCHAEFFLER",
     "name": "Schaeffler India Limited",
     "market": 4482085.889085
    },
    {
     "number": 106,
     "ticker": "LODHA",
     "name": "Macrotech Developers Limited",
     "market": 4482081.8948220005
    },
    {
     "number": 107,
     "ticker": "ZOMATO",
     "name": "Zomato Limited",
     "market": 4362289.9827
    },
    {
     "number": 108,
     "ticker": "PGHH",
     "name": "Procter & Gamble Hygiene and Health Care Limited",
     "market": 4330148.569824
    },
    {
     "number": 109,
     "ticker": "YESBANK",
     "name": "Yes Bank Limited",
     "market": 4327568.689717
    },
    {
     "number": 110,
     "ticker": "POLYCAB",
     "name": "Polycab India Limited",
     "market": 4313091.3107575
    },
    {
     "number": 111,
     "ticker": "MAXHEALTH",
     "name": "Max Healthcare Institute Limited",
     "market": 4282467.469599
    },
    {
     "number": 112,
     "ticker": "IOB",
     "name": "Indian Overseas Bank",
     "market": 4243591.551472
    },
    {
     "number": 113,
     "ticker": "PAGEIND",
     "name": "Page Industries Limited",
     "market": 4227686.323842
    },
    {
     "number": 114,
     "ticker": "COLPAL",
     "name": "Colgate Palmolive (India) Limited",
     "market": 4099775.4540990004
    },
    {
     "number": 115,
     "ticker": "ASHOKLEY",
     "name": "Ashok Leyland Limited",
     "market": 4087089.168192
    },
    {
     "number": 116,
     "ticker": "ALKEM",
     "name": "Alkem Laboratories Limited",
     "market": 4060546.965
    },
    {
     "number": 117,
     "ticker": "NHPC",
     "name": "NHPC Limited",
     "market": 4038103.99161
    },
    {
     "number": 118,
     "ticker": "PAYTM",
     "name": "One 97 Communications Limited",
     "market": 4035963.3658559998
    },
    {
     "number": 119,
     "ticker": "PFC",
     "name": "Power Finance Corporation Limited",
     "market": 4006323.53664
    },
    {
     "number": 120,
     "ticker": "JSWENERGY",
     "name": "JSW Energy Limited",
     "market": 3961201.346378
    },
    {
     "number": 121,
     "ticker": "MUTHOOTFIN",
     "name": "Muthoot Finance Limited",
     "market": 3933982.777152
    },
    {
     "number": 122,
     "ticker": "AUBANK",
     "name": "AU Small Finance Bank Limited",
     "market": 3861418.8888959996
    },
    {
     "number": 123,
     "ticker": "INDUSTOWER",
     "name": "Indus Towers Limited",
     "market": 3853759.8385
    },
    {
     "number": 124,
     "ticker": "BALKRISIND",
     "name": "Balkrishna Industries Limited",
     "market": 3772488.304255
    },
    {
     "number": 125,
     "ticker": "UBL",
     "name": "United Breweries Limited",
     "market": 3766319.1449305
    },
    {
     "number": 126,
     "ticker": "ABCAPITAL",
     "name": "Aditya Birla Capital Limited",
     "market": 3712829.8514909996
    },
    {
     "number": 127,
     "ticker": "TATAELXSI",
     "name": "Tata Elxsi Limited",
     "market": 3711115.33604
    },
    {
     "number": 128,
     "ticker": "DALBHARAT",
     "name": "Dalmia Bharat Limited",
     "market": 3690082.2053825
    },
    {
     "number": 129,
     "ticker": "HDFCAMC",
     "name": "HDFC Asset Management Company Limited",
     "market": 3644974.012206
    },
    {
     "number": 130,
     "ticker": "INDIANB",
     "name": "Indian Bank",
     "market": 3593720.4065845003
    },
    {
     "number": 131,
     "ticker": "ASTRAL",
     "name": "Astral Limited",
     "market": 3591336.71764
    },
    {
     "number": 132,
     "ticker": "BHARATFORG",
     "name": "Bharat Forge Limited",
     "market": 3587127.615244
    },
    {
     "number": 133,
     "ticker": "LTTS",
     "name": "L&T Technology Services Limited",
     "market": 3567801.9108059998
    },
    {
     "number": 134,
     "ticker": "MRF",
     "name": "MRF Limited",
     "market": 3564561.939496
    },
    {
     "number": 135,
     "ticker": "TATACOMM",
     "name": "Tata Communications Limited",
     "market": 3549675
    },
    {
     "number": 136,
     "ticker": "NYKAA",
     "name": "FSN E-Commerce Ventures Limited",
     "market": 3543169.5275375
    },
    {
     "number": 137,
     "ticker": "CONCOR",
     "name": "Container Corporation of India Limited",
     "market": 3535430.45427
    },
    {
     "number": 138,
     "ticker": "PERSISTENT",
     "name": "Persistent Systems Limited",
     "market": 3522810.375
    },
    {
     "number": 139,
     "ticker": "PATANJALI",
     "name": "Patanjali Foods Limited",
     "market": 3508454.1152759995
    },
    {
     "number": 140,
     "ticker": "IRFC",
     "name": "Indian Railway Finance Corporation Limited",
     "market": 3476222.596
    },
    {
     "number": 141,
     "ticker": "LINDEINDIA",
     "name": "Linde India Limited",
     "market": 3436826.2605655
    },
    {
     "number": 142,
     "ticker": "IDFCFIRSTB",
     "name": "IDFC First Bank Limited",
     "market": 3435018.219156
    },
    {
     "number": 143,
     "ticker": "PETRONET",
     "name": "Petronet LNG Limited",
     "market": 3432750.201388
    },
    {
     "number": 144,
     "ticker": "SOLARINDS",
     "name": "Solar Industries India Limited",
     "market": 3431835.335875
    },
    {
     "number": 145,
     "ticker": "SAIL",
     "name": "Steel Authority of India Limited",
     "market": 3415944.4140029997
    },
    {
     "number": 146,
     "ticker": "MPHASIS",
     "name": "MphasiS Limited",
     "market": 3383193.7721725
    },
    {
     "number": 147,
     "ticker": "HINDPETRO",
     "name": "Hindustan Petroleum Corporation Limited",
     "market": 3359122.48096
    },
    {
     "number": 148,
     "ticker": "APLAPOLLO",
     "name": "APL Apollo Tubes Limited",
     "market": 3342806.9665490002
    },
    {
     "number": 149,
     "ticker": "FLUOROCHEM",
     "name": "Gujarat Fluorochemicals Limited",
     "market": 3317689.7
    },
    {
     "number": 150,
     "ticker": "NMDC",
     "name": "NMDC Limited",
     "market": 3269090.825675
    },
    {
     "number": 151,
     "ticker": "HONAUT",
     "name": "Honeywell Automation India Limited",
     "market": 3217005.8265959998
    },
    {
     "number": 152,
     "ticker": "SUPREMEIND",
     "name": "Supreme Industries Limited",
     "market": 3192883.890885
    },
    {
     "number": 153,
     "ticker": "GUJGASLTD",
     "name": "Gujarat Gas Limited",
     "market": 3163841.0145
    },
    {
     "number": 154,
     "ticker": "BANDHANBNK",
     "name": "Bandhan Bank Limited",
     "market": 3153212.4096
    },
    {
     "number": 155,
     "ticker": "ACC",
     "name": "ACC Limited",
     "market": 3130789.2487359997
    },
    {
     "number": 156,
     "ticker": "OBEROIRLTY",
     "name": "Oberoi Realty Limited",
     "market": 3063712.448962
    },
    {
     "number": 157,
     "ticker": "BANKINDIA",
     "name": "Bank of India",
     "market": 3063312.071255
    },
    {
     "number": 158,
     "ticker": "RECLTD",
     "name": "REC Limited",
     "market": 3040057.108
    },
    {
     "number": 159,
     "ticker": "AUROPHARMA",
     "name": "Aurobindo Pharma Limited",
     "market": 3035747.9332290003
    },
    {
     "number": 160,
     "ticker": "STARHEALTH",
     "name": "Star Health and Allied Insurance Company Limited",
     "market": 3014833.694684
    },
    {
     "number": 161,
     "ticker": "IGL",
     "name": "Indraprastha Gas Limited",
     "market": 3000903.4296
    },
    {
     "number": 162,
     "ticker": "LUPIN",
     "name": "Lupin Limited",
     "market": 2950098.97614
    },
    {
     "number": 163,
     "ticker": "UCOBANK",
     "name": "UCO Bank",
     "market": 2905297.836768
    },
    {
     "number": 164,
     "ticker": "JUBLFOOD",
     "name": "Jubilant Foodworks Limited",
     "market": 2903978.7252
    },
    {
     "number": 165,
     "ticker": "POLICYBZR",
     "name": "PB Fintech Limited",
     "market": 2875793.3537609996
    },
    {
     "number": 166,
     "ticker": "GODREJPROP",
     "name": "Godrej Properties Limited",
     "market": 2866540.098362
    },
    {
     "number": 167,
     "ticker": "M&MFIN",
     "name": "Mahindra & Mahindra Financial Services Limited",
     "market": 2862105.05968
    },
    {
     "number": 168,
     "ticker": "IDEA",
     "name": "Vodafone Idea Limited",
     "market": 2823421.97389
    },
    {
     "number": 169,
     "ticker": "OFSS",
     "name": "Oracle Financial Services Software Limited",
     "market": 2819710.219725
    },
    {
     "number": 170,
     "ticker": "FEDERALBNK",
     "name": "The Federal Bank  Limited",
     "market": 2801027.339397
    },
    {
     "number": 171,
     "ticker": "MANYAVAR",
     "name": "Vedant Fashions Limited",
     "market": 2765607.751385
    },
    {
     "number": 172,
     "ticker": "UNOMINDA",
     "name": "UNO Minda Limited",
     "market": 2755449.6255
    },
    {
     "number": 173,
     "ticker": "AIAENG",
     "name": "AIA Engineering Limited",
     "market": 2738214.66147
    },
    {
     "number": 174,
     "ticker": "THERMAX",
     "name": "Thermax Limited",
     "market": 2731896.4901
    },
    {
     "number": 175,
     "ticker": "OIL",
     "name": "Oil India Limited",
     "market": 2728905.670701
    },
    {
     "number": 176,
     "ticker": "VOLTAS",
     "name": "Voltas Limited",
     "market": 2707464.38505
    },
    {
     "number": 177,
     "ticker": "3MINDIA",
     "name": "3M India Limited",
     "market": 2586893.777195
    },
    {
     "number": 178,
     "ticker": "COROMANDEL",
     "name": "Coromandel International Limited",
     "market": 2585080.7180825
    },
    {
     "number": 179,
     "ticker": "SUNDARMFIN",
     "name": "Sundaram Finance Limited",
     "market": 2554833.2607
    },
    {
     "number": 180,
     "ticker": "KPITTECH",
     "name": "KPIT Technologies Limited",
     "market": 2536104.3678079997
    },
    {
     "number": 181,
     "ticker": "DEEPAKNTR",
     "name": "Deepak Nitrite Limited",
     "market": 2513178.1734660002
    },
    {
     "number": 182,
     "ticker": "ESCORTS",
     "name": "Escorts Kubota Limited",
     "market": 2495062.791942
    },
    {
     "number": 183,
     "ticker": "BIOCON",
     "name": "Biocon Limited",
     "market": 2477438.1
    },
    {
     "number": 184,
     "ticker": "TATACHEM",
     "name": "Tata Chemicals Limited",
     "market": 2477377.425411
    },
    {
     "number": 185,
     "ticker": "TORNTPOWER",
     "name": "Torrent Power Limited",
     "market": 2453068.065536
    },
    {
     "number": 186,
     "ticker": "GMRINFRA",
     "name": "GMR Airports Infrastructure Limited",
     "market": 2447575.8090125
    },
    {
     "number": 187,
     "ticker": "BHEL",
     "name": "Bharat Heavy Electricals Limited",
     "market": 2439185.3801775
    },
    {
     "number": 188,
     "ticker": "SONACOMS",
     "name": "Sona BLW Precision Forgings Limited",
     "market": 2420647.94657
    },
    {
     "number": 189,
     "ticker": "DELHIVERY",
     "name": "Delhivery Limited",
     "market": 2416783.7916585
    },
    {
     "number": 190,
     "ticker": "SYNGENE",
     "name": "Syngene International Limited",
     "market": 2386528.1025
    },
    {
     "number": 191,
     "ticker": "CRISIL",
     "name": "CRISIL Limited",
     "market": 2352052.266564
    },
    {
     "number": 192,
     "ticker": "GICRE",
     "name": "General Insurance Corporation of India",
     "market": 2344755.6
    },
    {
     "number": 193,
     "ticker": "COFORGE",
     "name": "Coforge Limited",
     "market": 2329509.098686
    },
    {
     "number": 194,
     "ticker": "PHOENIXLTD",
     "name": "The Phoenix Mills Limited",
     "market": 2323554.6443129997
    },
    {
     "number": 195,
     "ticker": "JKCEMENT",
     "name": "JK Cement Limited",
     "market": 2259091.854487
    },
    {
     "number": 196,
     "ticker": "POONAWALLA",
     "name": "Poonawalla Fincorp Limited",
     "market": 2246206.853475
    },
    {
     "number": 197,
     "ticker": "GLAXO",
     "name": "GlaxoSmithKline Pharmaceuticals Limited",
     "market": 2244206.435415
    },
    {
     "number": 198,
     "ticker": "MFSL",
     "name": "Max Financial Services Limited",
     "market": 2191478.79585
    },
    {
     "number": 199,
     "ticker": "METROBRAND",
     "name": "Metro Brands Limited",
     "market": 2159328.0406764997
    },
    {
     "number": 200,
     "ticker": "MSUMI",
     "name": "Motherson Sumi Wiring India Limited",
     "market": 2133184.57719
    },
    {
     "number": 201,
     "ticker": "SUMICHEM",
     "name": "Sumitomo Chemical India Limited",
     "market": 2126859.981096
    },
    {
     "number": 202,
     "ticker": "RELAXO",
     "name": "Relaxo Footwears Limited",
     "market": 2118236.188437
    },
    {
     "number": 203,
     "ticker": "NAVINFLUOR",
     "name": "Navin Fluorine International Limited",
     "market": 2116258.03519
    },
    {
     "number": 204,
     "ticker": "SKFINDIA",
     "name": "SKF India Limited",
     "market": 2103956.1103725
    },
    {
     "number": 205,
     "ticker": "CENTRALBK",
     "name": "Central Bank of India",
     "market": 2092106.403112
    },
    {
     "number": 206,
     "ticker": "GLAND",
     "name": "Gland Pharma Limited",
     "market": 2088683.7531975
    },
    {
     "number": 207,
     "ticker": "KANSAINER",
     "name": "Kansai Nerolac Paints Limited",
     "market": 2084541.47696
    },
    {
     "number": 208,
     "ticker": "GRINDWELL",
     "name": "Grindwell Norton Limited",
     "market": 2079764.48
    },
    {
     "number": 209,
     "ticker": "TIMKEN",
     "name": "Timken India Limited",
     "market": 2072614.606003
    },
    {
     "number": 210,
     "ticker": "IPCALAB",
     "name": "IPCA Laboratories Limited",
     "market": 2055892.130563
    },
    {
     "number": 211,
     "ticker": "SUNDRMFAST",
     "name": "Sundram Fasteners Limited",
     "market": 2055055.4586
    },
    {
     "number": 212,
     "ticker": "ATUL",
     "name": "Atul Limited",
     "market": 2053876.9673275
    },
    {
     "number": 213,
     "ticker": "ZEEL",
     "name": "Zee Entertainment Enterprises Limited",
     "market": 2038702.46895
    },
    {
     "number": 214,
     "ticker": "L&TFH",
     "name": "L&T Finance Holdings Limited",
     "market": 2034570.1514985
    },
    {
     "number": 215,
     "ticker": "ABFRL",
     "name": "Aditya Birla Fashion and Retail Limited",
     "market": 2033642.0817945001
    },
    {
     "number": 216,
     "ticker": "APOLLOTYRE",
     "name": "Apollo Tyres Limited",
     "market": 2031687.926254
    },
    {
     "number": 217,
     "ticker": "KPRMILL",
     "name": "K.P.R. Mill Limited",
     "market": 1976026.734
    },
    {
     "number": 218,
     "ticker": "ZFCVINDIA",
     "name": "ZF Commercial Vehicle Control Systems India Limited",
     "market": 1974307.3671839999
    },
    {
     "number": 219,
     "ticker": "FORTIS",
     "name": "Fortis Healthcare Limited",
     "market": 1962136.226652
    },
    {
     "number": 220,
     "ticker": "AARTIIND",
     "name": "Aarti Industries Limited",
     "market": 1878314.6573525
    },
    {
     "number": 221,
     "ticker": "HATSUN",
     "name": "Hatsun Agro Product Limited",
     "market": 1876431.4096320001
    },
    {
     "number": 222,
     "ticker": "CARBORUNIV",
     "name": "Carborundum Universal Limited",
     "market": 1871931.7710179999
    },
    {
     "number": 223,
     "ticker": "CROMPTON",
     "name": "Crompton Greaves Consumer Electricals Limited",
     "market": 1863439.56307
    },
    {
     "number": 224,
     "ticker": "VINATIORGA",
     "name": "Vinati Organics Limited",
     "market": 1858710.5922
    },
    {
     "number": 225,
     "ticker": "IIFL",
     "name": "IIFL Finance Limited",
     "market": 1855992.6307589998
    },
    {
     "number": 226,
     "ticker": "BATAINDIA",
     "name": "Bata India Limited",
     "market": 1822970.36359
    },
    {
     "number": 227,
     "ticker": "BDL",
     "name": "Bharat Dynamics Limited",
     "market": 1812101.71875
    },
    {
     "number": 228,
     "ticker": "LICHSGFIN",
     "name": "LIC Housing Finance Limited",
     "market": 1808332.1125
    },
    {
     "number": 229,
     "ticker": "RAJESHEXPO",
     "name": "Rajesh Exports Limited",
     "market": 1801381.0098589999
    },
    {
     "number": 230,
     "ticker": "RAMCOCEM",
     "name": "The Ramco Cements Limited",
     "market": 1787906.29327
    },
    {
     "number": 231,
     "ticker": "ENDURANCE",
     "name": "Endurance Technologies Limited",
     "market": 1746540.2521920002
    },
    {
     "number": 232,
     "ticker": "DEVYANI",
     "name": "Devyani International Limited",
     "market": 1742976.6332770002
    },
    {
     "number": 233,
     "ticker": "PSB",
     "name": "Punjab & Sind Bank",
     "market": 1738502.2236555
    },
    {
     "number": 234,
     "ticker": "DIXON",
     "name": "Dixon Technologies (India) Limited",
     "market": 1704195.001145
    },
    {
     "number": 235,
     "ticker": "KAJARIACER",
     "name": "Kajaria Ceramics Limited",
     "market": 1678788.77465
    },
    {
     "number": 236,
     "ticker": "WHIRLPOOL",
     "name": "Whirlpool of India Limited",
     "market": 1668428.000415
    },
    {
     "number": 237,
     "ticker": "MAHABANK",
     "name": "Bank of Maharashtra",
     "market": 1665797.8706325
    },
    {
     "number": 238,
     "ticker": "SUNTV",
     "name": "Sun TV Network Limited",
     "market": 1638800.89227
    },
    {
     "number": 239,
     "ticker": "PEL",
     "name": "Piramal Enterprises Limited",
     "market": 1618975.20895
    },
    {
     "number": 240,
     "ticker": "PRESTIGE",
     "name": "Prestige Estates Projects Limited",
     "market": 1616274.188928
    },
    {
     "number": 241,
     "ticker": "NIACL",
     "name": "The New India Assurance Company Limited",
     "market": 1603504
    },
    {
     "number": 242,
     "ticker": "RADICO",
     "name": "Radico Khaitan Limited",
     "market": 1596866.79669
    },
    {
     "number": 243,
     "ticker": "PFIZER",
     "name": "Pfizer Limited",
     "market": 1586142.4900379998
    },
    {
     "number": 244,
     "ticker": "NH",
     "name": "Narayana Hrudayalaya Ltd.",
     "market": 1582059.164166
    },
    {
     "number": 245,
     "ticker": "EMAMILTD",
     "name": "Emami Limited",
     "market": 1581743.325
    },
    {
     "number": 246,
     "ticker": "LAURUSLABS",
     "name": "Laurus Labs Limited",
     "market": 1577977.8847875
    },
    {
     "number": 247,
     "ticker": "FIVESTAR",
     "name": "Five-Star Business Finance Limited",
     "market": 1575125.24472
    },
    {
     "number": 248,
     "ticker": "AJANTPHARM",
     "name": "Ajanta Pharma Limited",
     "market": 1548776.87364
    },
    {
     "number": 249,
     "ticker": "INDIAMART",
     "name": "Indiamart Intermesh Limited",
     "market": 1536775.078365
    },
    {
     "number": 250,
     "ticker": "360ONE",
     "name": "360 ONE WAM LIMITED",
     "market": 1533603.0687679998
    },
    {
     "number": 251,
     "ticker": "KEI",
     "name": "KEI Industries Limited",
     "market": 1532053.8480870002
    },
    {
     "number": 252,
     "ticker": "JBCHEPHARM",
     "name": "JB Chemicals & Pharmaceuticals Limited",
     "market": 1529251.881384
    },
    {
     "number": 253,
     "ticker": "LALPATHLAB",
     "name": "Dr. Lal Path Labs Ltd.",
     "market": 1524048.159437
    },
    {
     "number": 254,
     "ticker": "JSL",
     "name": "Jindal Stainless Limited",
     "market": 1522885.8662639998
    },
    {
     "number": 255,
     "ticker": "IRB",
     "name": "IRB Infrastructure Developers Limited",
     "market": 1518808.5
    },
    {
     "number": 256,
     "ticker": "EXIDEIND",
     "name": "Exide Industries Limited",
     "market": 1512575
    },
    {
     "number": 257,
     "ticker": "PVR",
     "name": "PVR Limited",
     "market": 1502596.16676
    },
    {
     "number": 258,
     "ticker": "GSPL",
     "name": "Gujarat State Petronet Limited",
     "market": 1495160.1464
    },
    {
     "number": 259,
     "ticker": "BLUEDART",
     "name": "Blue Dart Express Limited",
     "market": 1474204.6754529998
    },
    {
     "number": 260,
     "ticker": "NATIONALUM",
     "name": "National Aluminium Company Limited",
     "market": 1439919.3210079998
    },
    {
     "number": 261,
     "ticker": "RVNL",
     "name": "Rail Vikas Nigam Limited",
     "market": 1430323.7886
    },
    {
     "number": 262,
     "ticker": "CREDITACC",
     "name": "CREDITACCESS GRAMEEN LIMITED",
     "market": 1429656.38816
    },
    {
     "number": 263,
     "ticker": "TRIDENT",
     "name": "Trident Limited",
     "market": 1424319.609765
    },
    {
     "number": 264,
     "ticker": "POWERINDIA",
     "name": "Hitachi Energy India Limited",
     "market": 1416988.92195
    },
    {
     "number": 265,
     "ticker": "MEDANTA",
     "name": "Global Health Limited",
     "market": 1413200.2356989998
    },
    {
     "number": 266,
     "ticker": "GILLETTE",
     "name": "Gillette India Limited",
     "market": 1406410.5509370002
    },
    {
     "number": 267,
     "ticker": "RATNAMANI",
     "name": "Ratnamani Metals & Tubes Limited",
     "market": 1389118.302
    },
    {
     "number": 268,
     "ticker": "ELGIEQUIP",
     "name": "Elgi Equipments Limited",
     "market": 1388536.8536039998
    },
    {
     "number": 269,
     "ticker": "ISEC",
     "name": "ICICI Securities Limited",
     "market": 1382035.301143
    },
    {
     "number": 270,
     "ticker": "CGCL",
     "name": "Capri Global Capital Limited",
     "market": 1362979.528106
    },
    {
     "number": 271,
     "ticker": "GODREJIND",
     "name": "Godrej Industries Limited",
     "market": 1359513.6008945
    },
    {
     "number": 272,
     "ticker": "CLEAN",
     "name": "Clean Science and Technology Limited",
     "market": 1346985.756981
    },
    {
     "number": 273,
     "ticker": "MAZDOCK",
     "name": "Mazagon Dock Shipbuilders Limited",
     "market": 1337305.545
    },
    {
     "number": 274,
     "ticker": "MAHINDCIE",
     "name": "Mahindra CIE Automotive Limited",
     "market": 1330803.218516
    },
    {
     "number": 275,
     "ticker": "AEGISCHEM",
     "name": "Aegis Logistics Limited",
     "market": 1330114.5
    },
    {
     "number": 276,
     "ticker": "FACT",
     "name": "Fertilizers and Chemicals Travancore Limited",
     "market": 1329085.8345960001
    },
    {
     "number": 277,
     "ticker": "BLUESTARCO",
     "name": "Blue Star Limited",
     "market": 1328312.986352
    },
    {
     "number": 278,
     "ticker": "SANOFI",
     "name": "Sanofi India Limited",
     "market": 1320898.294188
    },
    {
     "number": 279,
     "ticker": "FINEORG",
     "name": "Fine Organic Industries Limited",
     "market": 1320494.5063439999
    },
    {
     "number": 280,
     "ticker": "AFFLE",
     "name": "Affle (India) Limited",
     "market": 1315321.21326
    },
    {
     "number": 281,
     "ticker": "GLENMARK",
     "name": "Glenmark Pharmaceuticals Limited",
     "market": 1311235.420932
    },
    {
     "number": 282,
     "ticker": "NAM-INDIA",
     "name": "Nippon Life India Asset Management Limited",
     "market": 1308980.0180215
    },
    {
     "number": 283,
     "ticker": "SJVN",
     "name": "SJVN Limited",
     "market": 1306656.8956875
    },
    {
     "number": 284,
     "ticker": "REDINGTON",
     "name": "Redington Limited",
     "market": 1302471.0248715
    },
    {
     "number": 285,
     "ticker": "AAVAS",
     "name": "Aavas Financiers Limited",
     "market": 1273408.597955
    },
    {
     "number": 286,
     "ticker": "IDFC",
     "name": "IDFC Limited",
     "market": 1256787.7744780001
    },
    {
     "number": 287,
     "ticker": "FINCABLES",
     "name": "Finolex Cables Limited",
     "market": 1242785.11747
    },
    {
     "number": 288,
     "ticker": "NUVOCO",
     "name": "Nuvoco Vistas Corporation Limited",
     "market": 1231831.571697
    },
    {
     "number": 289,
     "ticker": "BAJAJELEC",
     "name": "Bajaj Electricals Limited",
     "market": 1210480.636122
    },
    {
     "number": 290,
     "ticker": "APTUS",
     "name": "Aptus Value Housing Finance India Limited",
     "market": 1209715.4796789999
    },
    {
     "number": 291,
     "ticker": "SUVENPHAR",
     "name": "Suven Pharmaceuticals Limited",
     "market": 1202564.852144
    },
    {
     "number": 292,
     "ticker": "ASTERDM",
     "name": "Aster DM Healthcare Limited",
     "market": 1202327.93542
    },
    {
     "number": 293,
     "ticker": "RHIM",
     "name": "RHI MAGNESITA INDIA LIMITED",
     "market": 1184940.874293
    },
    {
     "number": 294,
     "ticker": "KEC",
     "name": "KEC International Limited",
     "market": 1173222.776495
    },
    {
     "number": 295,
     "ticker": "SONATSOFTW",
     "name": "Sonata Software Limited",
     "market": 1172596.3681039999
    },
    {
     "number": 296,
     "ticker": "AETHER",
     "name": "Aether Industries Limited",
     "market": 1166105.1575255
    },
    {
     "number": 297,
     "ticker": "DCMSHRIRAM",
     "name": "DCM Shriram Limited",
     "market": 1165512.720304
    },
    {
     "number": 298,
     "ticker": "IEX",
     "name": "Indian Energy Exchange Limited",
     "market": 1140920.8544325
    },
    {
     "number": 299,
     "ticker": "HAPPSTMNDS",
     "name": "Happiest Minds Technologies Limited",
     "market": 1127691.814746
    },
    {
     "number": 300,
     "ticker": "KIMS",
     "name": "Krishna Institute of Medical Sciences Limited",
     "market": 1121549.4209115
    },
    {
     "number": 301,
     "ticker": "ALKYLAMINE",
     "name": "Alkyl Amines Chemicals Limited",
     "market": 1101422.935912
    },
    {
     "number": 302,
     "ticker": "CYIENT",
     "name": "Cyient Limited",
     "market": 1100497.747215
    },
    {
     "number": 303,
     "ticker": "CHAMBLFERT",
     "name": "Chambal Fertilizers & Chemicals Limited",
     "market": 1099204.937132
    },
    {
     "number": 304,
     "ticker": "ASAHIINDIA",
     "name": "Asahi India Glass Limited",
     "market": 1099131.1230165
    },
    {
     "number": 305,
     "ticker": "CASTROLIND",
     "name": "Castrol India Limited",
     "market": 1097431.285048
    },
    {
     "number": 306,
     "ticker": "BRIGADE",
     "name": "Brigade Enterprises Limited",
     "market": 1095283.147297
    },
    {
     "number": 307,
     "ticker": "KALYANKJIL",
     "name": "Kalyan Jewellers India Limited",
     "market": 1085160.8955495
    },
    {
     "number": 308,
     "ticker": "TTML",
     "name": "Tata Teleservices (Maharashtra) Limited",
     "market": 1084007.4246214998
    },
    {
     "number": 309,
     "ticker": "VGUARD",
     "name": "V-Guard Industries Limited",
     "market": 1080457.9458795
    },
    {
     "number": 310,
     "ticker": "NLCINDIA",
     "name": "NLC India Limited",
     "market": 1069790.1438435002
    },
    {
     "number": 311,
     "ticker": "LAXMIMACH",
     "name": "Lakshmi Machine Works Limited",
     "market": 1066409.109
    },
    {
     "number": 312,
     "ticker": "TRITURBINE",
     "name": "Triveni Turbine Limited",
     "market": 1059006.9356595
    },
    {
     "number": 313,
     "ticker": "FINPIPE",
     "name": "Finolex Industries Limited",
     "market": 1058533.59993
    },
    {
     "number": 314,
     "ticker": "AKZOINDIA",
     "name": "Akzo Nobel India Limited",
     "market": 1047677.6937269999
    },
    {
     "number": 315,
     "ticker": "MANAPPURAM",
     "name": "Manappuram Finance Limited",
     "market": 1046990.279773
    },
    {
     "number": 316,
     "ticker": "EIHOTEL",
     "name": "EIH Limited",
     "market": 1035915.7674830001
    },
    {
     "number": 317,
     "ticker": "CENTURYPLY",
     "name": "Century Plyboards (India) Limited",
     "market": 1035770.47938
    },
    {
     "number": 318,
     "ticker": "NATCOPHARM",
     "name": "Natco Pharma Limited",
     "market": 1028435.7890275
    },
    {
     "number": 319,
     "ticker": "KIOCL",
     "name": "KIOCL Limited",
     "market": 1024364.4723080001
    },
    {
     "number": 320,
     "ticker": "CHOLAHLDNG",
     "name": "Cholamandalam Financial Holdings Limited",
     "market": 1022732.489324
    },
    {
     "number": 321,
     "ticker": "CAMPUS",
     "name": "Campus Activewear Limited",
     "market": 1015519.3645739999
    },
    {
     "number": 322,
     "ticker": "CAMS",
     "name": "Computer Age Management Services Limited",
     "market": 995035.437962
    },
    {
     "number": 323,
     "ticker": "AMARAJABAT",
     "name": "Amara Raja Batteries Limited",
     "market": 989175.1875
    },
    {
     "number": 324,
     "ticker": "ZYDUSWELL",
     "name": "Zydus Wellness Limited",
     "market": 986489.1284319999
    },
    {
     "number": 325,
     "ticker": "BASF",
     "name": "BASF India Limited",
     "market": 985008.02384
    },
    {
     "number": 326,
     "ticker": "TEJASNET",
     "name": "Tejas Networks Limited",
     "market": 977791.34904
    },
    {
     "number": 327,
     "ticker": "APLLTD",
     "name": "Alembic Pharmaceuticals Limited",
     "market": 975641.0659739999
    },
    {
     "number": 328,
     "ticker": "MGL",
     "name": "Mahanagar Gas Limited",
     "market": 971430.0577410001
    },
    {
     "number": 329,
     "ticker": "GRINFRA",
     "name": "G R Infraprojects Limited",
     "market": 971337.79446
    },
    {
     "number": 330,
     "ticker": "ANGELONE",
     "name": "Angel One Limited",
     "market": 970011.5494614999
    },
    {
     "number": 331,
     "ticker": "SFL",
     "name": "Sheela Foam Limited",
     "market": 969704.657424
    },
    {
     "number": 332,
     "ticker": "TTKPRESTIG",
     "name": "TTK Prestige Limited",
     "market": 969119.92083
    },
    {
     "number": 333,
     "ticker": "APARINDS",
     "name": "Apar Industries Limited",
     "market": 958590.6373310001
    },
    {
     "number": 334,
     "ticker": "HINDCOPPER",
     "name": "Hindustan Copper Limited",
     "market": 951068.12367
    },
    {
     "number": 335,
     "ticker": "CDSL",
     "name": "Central Depository Services (India) Limited",
     "market": 949643.75
    },
    {
     "number": 336,
     "ticker": "GODFRYPHLP",
     "name": "Godfrey Phillips India Limited",
     "market": 946159.3592
    },
    {
     "number": 337,
     "ticker": "RENUKA",
     "name": "Shree Renuka Sugars Limited",
     "market": 938663.989893
    },
    {
     "number": 338,
     "ticker": "CUB",
     "name": "City Union Bank Limited",
     "market": 931814.0205225
    },
    {
     "number": 339,
     "ticker": "JKLAKSHMI",
     "name": "JK Lakshmi Cement Limited",
     "market": 931240.9023239999
    },
    {
     "number": 340,
     "ticker": "ANURAS",
     "name": "Anupam Rasayan India Limited",
     "market": 929945.0632094999
    },
    {
     "number": 341,
     "ticker": "MRPL",
     "name": "Mangalore Refinery and Petrochemicals Limited",
     "market": 920990.6573135001
    },
    {
     "number": 342,
     "ticker": "GESHIP",
     "name": "The Great Eastern Shipping Company Limited",
     "market": 920205.7362255
    },
    {
     "number": 343,
     "ticker": "POLYMED",
     "name": "Poly Medicure Limited",
     "market": 914013.774063
    },
    {
     "number": 344,
     "ticker": "NSLNISP",
     "name": "NMDC Steel Limited",
     "market": 909953.116425
    },
    {
     "number": 345,
     "ticker": "BIKAJI",
     "name": "Bikaji Foods International Limited",
     "market": 904722.82488
    },
    {
     "number": 346,
     "ticker": "MOTILALOFS",
     "name": "Motilal Oswal Financial Services Limited",
     "market": 902921.309978
    },
    {
     "number": 347,
     "ticker": "ABSLAMC",
     "name": "Aditya Birla Sun Life AMC Limited",
     "market": 896256
    },
    {
     "number": 348,
     "ticker": "CESC",
     "name": "CESC Limited",
     "market": 883492.691595
    },
    {
     "number": 349,
     "ticker": "TATAINVEST",
     "name": "Tata Investment Corporation Limited",
     "market": 882736.129312
    },
    {
     "number": 350,
     "ticker": "ALLCARGO",
     "name": "Allcargo Logistics Limited",
     "market": 873816.131106
    },
    {
     "number": 351,
     "ticker": "KALPATPOWR",
     "name": "Kalpataru Power Transmission Limited",
     "market": 867868.56706
    },
    {
     "number": 352,
     "ticker": "PNBHOUSING",
     "name": "PNB Housing Finance Limited",
     "market": 866321.218092
    },
    {
     "number": 353,
     "ticker": "HUDCO",
     "name": "Housing & Urban Development Corporation Limited",
     "market": 865821.75
    },
    {
     "number": 354,
     "ticker": "ITI",
     "name": "ITI Limited",
     "market": 856043.982828
    },
    {
     "number": 355,
     "ticker": "ROUTE",
     "name": "ROUTE MOBILE LIMITED",
     "market": 852911.901003
    },
    {
     "number": 356,
     "ticker": "RITES",
     "name": "RITES Limited",
     "market": 851990.3403585
    },
    {
     "number": 357,
     "ticker": "VTL",
     "name": "Vardhman Textiles Limited",
     "market": 849166.14585
    },
    {
     "number": 358,
     "ticker": "RBLBANK",
     "name": "RBL Bank Limited",
     "market": 845960.9058930001
    },
    {
     "number": 359,
     "ticker": "HFCL",
     "name": "HFCL Limited",
     "market": 839743.6966494999
    },
    {
     "number": 360,
     "ticker": "KARURVYSYA",
     "name": "Karur Vysya Bank Limited",
     "market": 837095.730696
    },
    {
     "number": 361,
     "ticker": "CERA",
     "name": "Cera Sanitaryware Limited",
     "market": 832772.615157
    },
    {
     "number": 362,
     "ticker": "EIDPARRY",
     "name": "EID Parry India Limited",
     "market": 832024.9490169999
    },
    {
     "number": 363,
     "ticker": "INGERRAND",
     "name": "Ingersoll Rand (India) Limited",
     "market": 826750.136
    },
    {
     "number": 364,
     "ticker": "GALAXYSURF",
     "name": "Galaxy Surfactants Limited",
     "market": 825882.993088
    },
    {
     "number": 365,
     "ticker": "PPLPHARMA",
     "name": "Piramal Pharma Limited",
     "market": 816826.51325
    },
    {
     "number": 366,
     "ticker": "UTIAMC",
     "name": "UTI Asset Management Company Limited",
     "market": 815164.325657
    },
    {
     "number": 367,
     "ticker": "KRBL",
     "name": "KRBL Limited",
     "market": 813978.246536
    },
    {
     "number": 368,
     "ticker": "RAYMOND",
     "name": "Raymond Limited",
     "market": 813564.2796855001
    },
    {
     "number": 369,
     "ticker": "ASTRAZEN",
     "name": "AstraZeneca Pharma India Limited",
     "market": 813200
    },
    {
     "number": 370,
     "ticker": "VIPIND",
     "name": "VIP Industries Limited",
     "market": 811259.530845
    },
    {
     "number": 371,
     "ticker": "ACI",
     "name": "Archean Chemical Industries Limited",
     "market": 800398.1669505
    },
    {
     "number": 372,
     "ticker": "BALRAMCHIN",
     "name": "Balrampur Chini Mills Limited",
     "market": 799363.0340675
    },
    {
     "number": 373,
     "ticker": "SUZLON",
     "name": "Suzlon Energy Limited",
     "market": 795773.879557
    },
    {
     "number": 374,
     "ticker": "GODREJAGRO",
     "name": "Godrej Agrovet Limited",
     "market": 793047.99303
    },
    {
     "number": 375,
     "ticker": "GNFC",
     "name": "Gujarat Narmada Valley Fertilizers and Chemicals Limited",
     "market": 791625.5712105001
    },
    {
     "number": 376,
     "ticker": "ERIS",
     "name": "Eris Lifesciences Limited",
     "market": 778011.593598
    },
    {
     "number": 377,
     "ticker": "PGHL",
     "name": "Procter & Gamble Health Limited",
     "market": 777855.3402110001
    },
    {
     "number": 378,
     "ticker": "MEDPLUS",
     "name": "Medplus Health Services Limited",
     "market": 775128.976972
    },
    {
     "number": 379,
     "ticker": "SAPPHIRE",
     "name": "Sapphire Foods India Limited",
     "market": 774011.691921
    },
    {
     "number": 380,
     "ticker": "DATAPATTNS",
     "name": "Data Patterns (India) Limited",
     "market": 770171.461533
    },
    {
     "number": 381,
     "ticker": "SUNCLAYLTD",
     "name": "Sundaram Clayton Limited",
     "market": 762425.89114
    },
    {
     "number": 382,
     "ticker": "JBMA",
     "name": "JBM Auto Limited",
     "market": 761511.53652
    },
    {
     "number": 383,
     "ticker": "EASEMYTRIP",
     "name": "Easy Trip Planners Limited",
     "market": 757907.52
    },
    {
     "number": 384,
     "ticker": "CCL",
     "name": "CCL Products (India) Limited",
     "market": 755132.98788
    },
    {
     "number": 385,
     "ticker": "EQUITASBNK",
     "name": "Equitas Small Finance Bank Limited",
     "market": 745184.5213339999
    },
    {
     "number": 386,
     "ticker": "CHALET",
     "name": "Chalet Hotels Limited",
     "market": 744547.7936160001
    },
    {
     "number": 387,
     "ticker": "RAINBOW",
     "name": "Rainbow Childrens Medicare Limited",
     "market": 741469.823535
    },
    {
     "number": 388,
     "ticker": "PNCINFRA",
     "name": "PNC Infratech Limited",
     "market": 741141.647685
    },
    {
     "number": 389,
     "ticker": "FSL",
     "name": "Firstsource Solutions Limited",
     "market": 735325.32143
    },
    {
     "number": 390,
     "ticker": "KSB",
     "name": "Ksb Limited",
     "market": 729154.7161119999
    },
    {
     "number": 391,
     "ticker": "BSOFT",
     "name": "BIRLASOFT LIMITED",
     "market": 717824.4334905001
    },
    {
     "number": 392,
     "ticker": "KNRCON",
     "name": "KNR Constructions Limited",
     "market": 713492.1802
    },
    {
     "number": 393,
     "ticker": "SHOPERSTOP",
     "name": "Shoppers Stop Limited",
     "market": 711340.3555125
    },
    {
     "number": 394,
     "ticker": "SYMPHONY",
     "name": "Symphony Limited",
     "market": 709468.9155
    },
    {
     "number": 395,
     "ticker": "CENTURYTEX",
     "name": "Century Textiles & Industries Limited",
     "market": 708150.6112
    },
    {
     "number": 396,
     "ticker": "CANFINHOME",
     "name": "Can Fin Homes Limited",
     "market": 704651.6295
    },
    {
     "number": 397,
     "ticker": "GRANULES",
     "name": "Granules India Limited",
     "market": 703618.291692
    },
    {
     "number": 398,
     "ticker": "TANLA",
     "name": "Tanla Platforms Limited",
     "market": 703249.8680025
    },
    {
     "number": 399,
     "ticker": "JYOTHYLAB",
     "name": "Jyothy Labs Limited",
     "market": 699532.46682
    },
    {
     "number": 400,
     "ticker": "SPLPETRO",
     "name": "Supreme Petrochem Limited",
     "market": 696317.089426
    },
    {
     "number": 401,
     "ticker": "DEEPAKFERT",
     "name": "Deepak Fertilizers and Petrochemicals Corporation Limited",
     "market": 692666.945775
    },
    {
     "number": 402,
     "ticker": "CRAFTSMAN",
     "name": "Craftsman Automation Limited",
     "market": 687789.907983
    },
    {
     "number": 403,
     "ticker": "BIRLACORPN",
     "name": "Birla Corporation Limited",
     "market": 685501.598994
    },
    {
     "number": 404,
     "ticker": "BLS",
     "name": "BLS International Services Limited",
     "market": 680728.74
    },
    {
     "number": 405,
     "ticker": "SHYAMMETL",
     "name": "Shyam Metalics and Energy Limited",
     "market": 670479.5884080001
    },
    {
     "number": 406,
     "ticker": "NCC",
     "name": "NCC Limited",
     "market": 666145.229868
    },
    {
     "number": 407,
     "ticker": "GMMPFAUDLR",
     "name": "GMM Pfaudler Limited",
     "market": 659072.90384
    },
    {
     "number": 408,
     "ticker": "LATENTVIEW",
     "name": "Latent View Analytics Limited",
     "market": 657938.735766
    },
    {
     "number": 409,
     "ticker": "USHAMART",
     "name": "Usha Martin Limited",
     "market": 653671.1181
    },
    {
     "number": 410,
     "ticker": "HOMEFIRST",
     "name": "Home First Finance Company India Limited",
     "market": 653568.5033585
    },
    {
     "number": 411,
     "ticker": "JKPAPER",
     "name": "JK Paper Limited",
     "market": 646608.747048
    },
    {
     "number": 412,
     "ticker": "TMB",
     "name": "Tamilnad Mercantile Bank Limited",
     "market": 645440.5265040001
    },
    {
     "number": 413,
     "ticker": "JINDWORLD",
     "name": "Jindal Worldwide Limited",
     "market": 643169.183
    },
    {
     "number": 414,
     "ticker": "METROPOLIS",
     "name": "Metropolis Healthcare Limited",
     "market": 639262.718712
    },
    {
     "number": 415,
     "ticker": "SAREGAMA",
     "name": "Saregama India Limited",
     "market": 638488.626135
    },
    {
     "number": 416,
     "ticker": "NBCC",
     "name": "NBCC (India) Limited",
     "market": 638100
    },
    {
     "number": 417,
     "ticker": "ECLERX",
     "name": "eClerx Services Limited",
     "market": 632623.24544
    },
    {
     "number": 418,
     "ticker": "BALAMINES",
     "name": "Balaji Amines Limited",
     "market": 629648.633
    },
    {
     "number": 419,
     "ticker": "WELSPUNIND",
     "name": "Welspun India Limited",
     "market": 628899.225066
    },
    {
     "number": 420,
     "ticker": "PRAJIND",
     "name": "Praj Industries Limited",
     "market": 626461.63008
    },
    {
     "number": 421,
     "ticker": "COCHINSHIP",
     "name": "Cochin Shipyard Limited",
     "market": 625803.405425
    },
    {
     "number": 422,
     "ticker": "ZENSARTECH",
     "name": "Zensar Technologies Limited",
     "market": 621067.066314
    },
    {
     "number": 423,
     "ticker": "AMBER",
     "name": "Amber Enterprises India Limited",
     "market": 614775.815826
    },
    {
     "number": 424,
     "ticker": "LEMONTREE",
     "name": "Lemon Tree Hotels Limited",
     "market": 612010.39344
    },
    {
     "number": 425,
     "ticker": "PRINCEPIPE",
     "name": "Prince Pipes And Fittings Limited",
     "market": 599793.853575
    },
    {
     "number": 426,
     "ticker": "TRIVENI",
     "name": "Triveni Engineering & Industries Limited",
     "market": 593541.840232
    },
    {
     "number": 427,
     "ticker": "GARFIBRES",
     "name": "Garware Technical Fibres Limited",
     "market": 593035.2851535
    },
    {
     "number": 428,
     "ticker": "LXCHEM",
     "name": "Laxmi Organic Industries Limited",
     "market": 590658.20946
    },
    {
     "number": 429,
     "ticker": "STLTECH",
     "name": "Sterlite Technologies Limited",
     "market": 587870.1013965
    },
    {
     "number": 430,
     "ticker": "CEATLTD",
     "name": "CEAT Limited",
     "market": 586748.809506
    },
    {
     "number": 431,
     "ticker": "BSE",
     "name": "BSE Limited",
     "market": 583777.3287645
    },
    {
     "number": 432,
     "ticker": "SPARC",
     "name": "Sun Pharma Advanced Research Company Limited",
     "market": 581989.957273
    },
    {
     "number": 433,
     "ticker": "ALOKINDS",
     "name": "Alok Industries Limited",
     "market": 575967.886516
    },
    {
     "number": 434,
     "ticker": "ORIENTELEC",
     "name": "Orient Electric Limited",
     "market": 575159.417334
    },
    {
     "number": 435,
     "ticker": "INDIACEM",
     "name": "The India Cements Limited",
     "market": 573464.7704505001
    },
    {
     "number": 436,
     "ticker": "JUBLINGREA",
     "name": "Jubilant Ingrevia Limited",
     "market": 573332.4598305001
    },
    {
     "number": 437,
     "ticker": "KIRLOSENG",
     "name": "Kirloskar Oil Engines Limited",
     "market": 573210.9102459999
    },
    {
     "number": 438,
     "ticker": "TCIEXP",
     "name": "TCI Express Limited",
     "market": 571973.778675
    },
    {
     "number": 439,
     "ticker": "JMFINANCIL",
     "name": "JM Financial Limited",
     "market": 569053.098488
    },
    {
     "number": 440,
     "ticker": "NETWORK18",
     "name": "Network18 Media & Investments Limited",
     "market": 567969.5715575
    },
    {
     "number": 441,
     "ticker": "BBTC",
     "name": "Bombay Burmah Trading Corporation Limited",
     "market": 566094.31065
    },
    {
     "number": 442,
     "ticker": "SWANENERGY",
     "name": "Swan Energy Limited",
     "market": 564254.546
    },
    {
     "number": 443,
     "ticker": "GPPL",
     "name": "Gujarat Pipavav Port Limited",
     "market": 562965.775195
    },
    {
     "number": 444,
     "ticker": "KAYNES",
     "name": "Kaynes Technology India Limited",
     "market": 559795.951488
    },
    {
     "number": 445,
     "ticker": "VRLLOG",
     "name": "VRL Logistics Limited",
     "market": 558860.94937
    },
    {
     "number": 446,
     "ticker": "INTELLECT",
     "name": "Intellect Design Arena Limited",
     "market": 557276.89295
    },
    {
     "number": 447,
     "ticker": "SWSOLAR",
     "name": "Sterling and Wilson Renewable Energy Limited",
     "market": 553145.7590280001
    },
    {
     "number": 448,
     "ticker": "CHEMPLASTS",
     "name": "Chemplast Sanmar Limited",
     "market": 549984.153159
    },
    {
     "number": 449,
     "ticker": "QUESS",
     "name": "Quess Corp Limited",
     "market": 547804.236956
    },
    {
     "number": 450,
     "ticker": "ROLEXRINGS",
     "name": "Rolex Rings Limited",
     "market": 545265.372864
    },
    {
     "number": 451,
     "ticker": "MAHLIFE",
     "name": "Mahindra Lifespace Developers Limited",
     "market": 544509.09415
    },
    {
     "number": 452,
     "ticker": "ESABINDIA",
     "name": "Esab India Limited",
     "market": 543812.30707
    },
    {
     "number": 453,
     "ticker": "MHRIL",
     "name": "Mahindra Holidays & Resorts India Limited",
     "market": 543037.07304
    },
    {
     "number": 454,
     "ticker": "GOCOLORS",
     "name": "Go Fashion (India) Limited",
     "market": 542601.257756
    },
    {
     "number": 455,
     "ticker": "HGS",
     "name": "Hinduja Global Solutions Limited",
     "market": 540801.374645
    },
    {
     "number": 456,
     "ticker": "BORORENEW",
     "name": "BOROSIL RENEWABLES LIMITED",
     "market": 536151.7684215
    },
    {
     "number": 457,
     "ticker": "GAEL",
     "name": "Gujarat Ambuja Exports Limited",
     "market": 532860.639255
    },
    {
     "number": 458,
     "ticker": "MAPMYINDIA",
     "name": "C.E. Info Systems Limited",
     "market": 532475.840556
    },
    {
     "number": 459,
     "ticker": "PRSMJOHNSN",
     "name": "Prism Johnson Limited",
     "market": 530286.15703
    },
    {
     "number": 460,
     "ticker": "RUSTOMJEE",
     "name": "Keystone Realtors Limited",
     "market": 527423.2846245
    },
    {
     "number": 461,
     "ticker": "IRCON",
     "name": "Ircon International Limited",
     "market": 526688.8144
    },
    {
     "number": 462,
     "ticker": "RCF",
     "name": "Rashtriya Chemicals and Fertilizers Limited",
     "market": 526034.60335
    },
    {
     "number": 463,
     "ticker": "WELCORP",
     "name": "Welspun Corp Limited",
     "market": 524366.436975
    },
    {
     "number": 464,
     "ticker": "BEML",
     "name": "BEML Limited",
     "market": 523637.943
    },
    {
     "number": 465,
     "ticker": "GRSE",
     "name": "Garden Reach Shipbuilders & Engineers Limited",
     "market": 521669.808
    },
    {
     "number": 466,
     "ticker": "EPL",
     "name": "EPL Limited",
     "market": 516229.04967
    },
    {
     "number": 467,
     "ticker": "MINDACORP",
     "name": "Minda Corporation Limited",
     "market": 514379.38934199995
    },
    {
     "number": 468,
     "ticker": "GRAPHITE",
     "name": "Graphite India Limited",
     "market": 512958.622047
    },
    {
     "number": 469,
     "ticker": "HGINFRA",
     "name": "H.G. Infra Engineering Limited",
     "market": 510094.285797
    },
    {
     "number": 470,
     "ticker": "OLECTRA",
     "name": "Olectra Greentech Limited",
     "market": 508284.9638725
    },
    {
     "number": 471,
     "ticker": "RELINFRA",
     "name": "Reliance Infrastructure Limited",
     "market": 507457.075
    },
    {
     "number": 472,
     "ticker": "JUSTDIAL",
     "name": "Just Dial Limited",
     "market": 501835.303104
    },
    {
     "number": 473,
     "ticker": "RAIN",
     "name": "Rain Industries Limited",
     "market": 501323.2345495
    },
    {
     "number": 474,
     "ticker": "IONEXCHANG",
     "name": "ION Exchange (India) Limited",
     "market": 500712.4049305
    },
    {
     "number": 475,
     "ticker": "EDELWEISS",
     "name": "Edelweiss Financial Services Limited",
     "market": 496071.23909
    },
    {
     "number": 476,
     "ticker": "UJJIVANSFB",
     "name": "Ujjivan Small Finance Bank Limited",
     "market": 493534.6049875
    },
    {
     "number": 477,
     "ticker": "TV18BRDCST",
     "name": "TV18 Broadcast Limited",
     "market": 492878.5462875
    },
    {
     "number": 478,
     "ticker": "GPIL",
     "name": "Godawari Power And Ispat limited",
     "market": 491757.063132
    },
    {
     "number": 479,
     "ticker": "MTARTECH",
     "name": "Mtar Technologies Limited",
     "market": 486478.31146050006
    },
    {
     "number": 480,
     "ticker": "TCI",
     "name": "Transport Corporation of India Limited",
     "market": 486206.486325
    },
    {
     "number": 481,
     "ticker": "RTNINDIA",
     "name": "RattanIndia Enterprises Limited",
     "market": 485867.76158800005
    },
    {
     "number": 482,
     "ticker": "VSTIND",
     "name": "VST Industries Limited",
     "market": 485733.31456
    },
    {
     "number": 483,
     "ticker": "SAFARI",
     "name": "Safari Industries (India) Limited",
     "market": 485571.652265
    },
    {
     "number": 484,
     "ticker": "ACE",
     "name": "Action Construction Equipment Limited",
     "market": 484549.524524
    },
    {
     "number": 485,
     "ticker": "MAHSCOOTER",
     "name": "Maharashtra Scooters Limited",
     "market": 483811.28342800005
    },
    {
     "number": 486,
     "ticker": "DELTACORP",
     "name": "Delta Corp Limited",
     "market": 483347.373665
    },
    {
     "number": 487,
     "ticker": "GLS",
     "name": "Glenmark Life Sciences Limited",
     "market": 481409.25878800004
    },
    {
     "number": 488,
     "ticker": "GHCL",
     "name": "GHCL Limited",
     "market": 481322.225403
    },
    {
     "number": 489,
     "ticker": "INDIGOPNTS",
     "name": "Indigo Paints Limited",
     "market": 479856.44154699997
    },
    {
     "number": 490,
     "ticker": "MAHSEAMLES",
     "name": "Maharashtra Seamless Limited",
     "market": 479114.325526
    },
    {
     "number": 491,
     "ticker": "SUPRAJIT",
     "name": "Suprajit Engineering Limited",
     "market": 477177.66411199997
    },
    {
     "number": 492,
     "ticker": "KFINTECH",
     "name": "Kfin Technologies Limited",
     "market": 474263.4289475
    },
    {
     "number": 493,
     "ticker": "GSFC",
     "name": "Gujarat State Fertilizers & Chemicals Limited",
     "market": 474188.2607
    },
    {
     "number": 494,
     "ticker": "J&KBANK",
     "name": "The Jammu & Kashmir Bank Limited",
     "market": 471605.8718205
    },
    {
     "number": 495,
     "ticker": "RELIGARE",
     "name": "Religare Enterprises Limited",
     "market": 469161.22135
    },
    {
     "number": 496,
     "ticker": "MASTEK",
     "name": "Mastek Limited",
     "market": 469143.55018
    },
    {
     "number": 497,
     "ticker": "SIS",
     "name": "SIS LIMITED",
     "market": 467281.4525665
    },
    {
     "number": 498,
     "ticker": "JINDALSAW",
     "name": "Jindal Saw Limited",
     "market": 466521.25670300005
    },
    {
     "number": 499,
     "ticker": "TEGA",
     "name": "Tega Industries Limited",
     "market": 465440.91862400004
    },
    {
     "number": 500,
     "ticker": "SYRMA",
     "name": "Syrma SGS Technology Limited",
     "market": 464130.224171
    },
    {
     "number": 501,
     "ticker": "AVANTIFEED",
     "name": "Avanti Feeds Limited",
     "market": 462485.791035
    },
    {
     "number": 502,
     "ticker": "STARCEMENT",
     "name": "Star Cement Limited",
     "market": 461301.8331445
    },
    {
     "number": 503,
     "ticker": "IBULHSGFIN",
     "name": "Indiabulls Housing Finance Limited",
     "market": 459099.319305
    },
    {
     "number": 504,
     "ticker": "RKFORGE",
     "name": "Ramkrishna Forgings Limited",
     "market": 457443.959635
    },
    {
     "number": 505,
     "ticker": "CAPLIPOINT",
     "name": "Caplin Point Laboratories Limited",
     "market": 452342.414787
    },
    {
     "number": 506,
     "ticker": "VAIBHAVGBL",
     "name": "Vaibhav Global Limited",
     "market": 450208.7728215
    },
    {
     "number": 507,
     "ticker": "RBA",
     "name": "Restaurant Brands Asia Limited",
     "market": 445580.16518400004
    },
    {
     "number": 508,
     "ticker": "JUBLPHARMA",
     "name": "Jubilant Pharmova Limited",
     "market": 444155.4561015
    },
    {
     "number": 509,
     "ticker": "SHARDACROP",
     "name": "Sharda Cropchem Limited",
     "market": 441809.764015
    },
    {
     "number": 510,
     "ticker": "NIITLTD",
     "name": "NIIT Limited",
     "market": 439150.78886
    },
    {
     "number": 511,
     "ticker": "PCBL",
     "name": "PCBL LIMITED",
     "market": 438234.08324400004
    },
    {
     "number": 512,
     "ticker": "MASFIN",
     "name": "MAS Financial Services Limited",
     "market": 438116.274645
    },
    {
     "number": 513,
     "ticker": "SCI",
     "name": "Shipping Corporation Of India Limited",
     "market": 435987.87336
    },
    {
     "number": 514,
     "ticker": "PDSL",
     "name": "PDS Limited",
     "market": 434876.42198
    },
    {
     "number": 515,
     "ticker": "GUJALKALI",
     "name": "Gujarat Alkalies and Chemicals Limited",
     "market": 429764.833563
    },
    {
     "number": 516,
     "ticker": "ELECON",
     "name": "Elecon Engineering Company Limited",
     "market": 428772.1662475
    },
    {
     "number": 517,
     "ticker": "CMSINFO",
     "name": "CMS Info Systems Limited",
     "market": 427611.016021
    },
    {
     "number": 518,
     "ticker": "VMART",
     "name": "V-Mart Retail Limited",
     "market": 427539.967449
    },
    {
     "number": 519,
     "ticker": "ICRA",
     "name": "ICRA Limited",
     "market": 426811.21412849997
    },
    {
     "number": 520,
     "ticker": "JSWHL",
     "name": "JSW Holdings Limited",
     "market": 425925.910125
    },
    {
     "number": 521,
     "ticker": "FDC",
     "name": "FDC Limited",
     "market": 425227.545292
    },
    {
     "number": 522,
     "ticker": "CSBBANK",
     "name": "CSB Bank Limited",
     "market": 425213.761977
    },
    {
     "number": 523,
     "ticker": "KTKBANK",
     "name": "The Karnataka Bank Limited",
     "market": 423778.10536800005
    },
    {
     "number": 524,
     "ticker": "MMTC",
     "name": "MMTC Limited",
     "market": 418500
    },
    {
     "number": 525,
     "ticker": "ENGINERSIN",
     "name": "Engineers India Limited",
     "market": 418440.5466985
    },
    {
     "number": 526,
     "ticker": "SUNTECK",
     "name": "Sunteck Realty Limited",
     "market": 417024.910146
    },
    {
     "number": 527,
     "ticker": "PRIVISCL",
     "name": "Privi Speciality Chemicals Limited",
     "market": 410783.416296
    },
    {
     "number": 528,
     "ticker": "PARADEEP",
     "name": "Paradeep Phosphates Limited",
     "market": 410506.799976
    },
    {
     "number": 529,
     "ticker": "SOBHA",
     "name": "Sobha Limited",
     "market": 408406.24301800004
    },
    {
     "number": 530,
     "ticker": "FUSION",
     "name": "Fusion Micro Finance Limited",
     "market": 403277.6705125
    },
    {
     "number": 531,
     "ticker": "GMDCLTD",
     "name": "Gujarat Mineral Development Corporation Limited",
     "market": 402588
    },
    {
     "number": 532,
     "ticker": "VIJAYA",
     "name": "Vijaya Diagnostic Centre Limited",
     "market": 399404.507775
    },
    {
     "number": 533,
     "ticker": "JAMNAAUTO",
     "name": "Jamna Auto Industries Limited",
     "market": 397227.7049025
    },
    {
     "number": 534,
     "ticker": "ANANTRAJ",
     "name": "Anant Raj Limited",
     "market": 395883.6732025
    },
    {
     "number": 535,
     "ticker": "SANSERA",
     "name": "Sansera Engineering Limited",
     "market": 395621.84673
    },
    {
     "number": 536,
     "ticker": "MFL",
     "name": "Meghmani Finechem Limited",
     "market": 392088.065967
    },
    {
     "number": 537,
     "ticker": "AHLUCONT",
     "name": "Ahluwalia Contracts (India) Limited",
     "market": 386283.76474
    },
    {
     "number": 538,
     "ticker": "BSHSL",
     "name": "Bombay Super Hybrid Seeds Limited",
     "market": 385854.37856
    },
    {
     "number": 539,
     "ticker": "TATACOFFEE",
     "name": "Tata Coffee Limited",
     "market": 384466.806645
    },
    {
     "number": 540,
     "ticker": "TEAMLEASE",
     "name": "Teamlease Services Limited",
     "market": 382873.5933705
    },
    {
     "number": 541,
     "ticker": "JKTYRE",
     "name": "JK Tyre & Industries Limited",
     "market": 381657.864
    },
    {
     "number": 542,
     "ticker": "VARROC",
     "name": "Varroc Engineering Limited",
     "market": 380972.8884
    },
    {
     "number": 543,
     "ticker": "GREENLAM",
     "name": "Greenlam Industries Limited",
     "market": 380914.153725
    },
    {
     "number": 544,
     "ticker": "JPPOWER",
     "name": "Jaiprakash Power Ventures Limited",
     "market": 380366.9648985
    },
    {
     "number": 545,
     "ticker": "INFIBEAM",
     "name": "Infibeam Avenues Limited",
     "market": 378906.037253
    },
    {
     "number": 546,
     "ticker": "SPANDANA",
     "name": "Spandana Sphoorty Financial Limited",
     "market": 378234.3488665
    },
    {
     "number": 547,
     "ticker": "HSCL",
     "name": "Himadri Speciality Chemical Limited",
     "market": 377753.383854
    },
    {
     "number": 548,
     "ticker": "BHARATRAS",
     "name": "Bharat Rasayan Limited",
     "market": 377171.598726
    },
    {
     "number": 549,
     "ticker": "RAJRATAN",
     "name": "Rajratan Global Wire Limited",
     "market": 377152.3735
    },
    {
     "number": 550,
     "ticker": "LAOPALA",
     "name": "La Opala RG Limited",
     "market": 376845
    },
    {
     "number": 551,
     "ticker": "SARDAEN",
     "name": "Sarda Energy & Minerals Limited",
     "market": 376184.62478849996
    },
    {
     "number": 552,
     "ticker": "RALLIS",
     "name": "Rallis India Limited",
     "market": 375130.48881
    },
    {
     "number": 553,
     "ticker": "BOROLTD",
     "name": "Borosil Limited",
     "market": 374275.55510550004
    },
    {
     "number": 554,
     "ticker": "RATEGAIN",
     "name": "Rategain Travel Technologies Limited",
     "market": 372286.18890400004
    },
    {
     "number": 555,
     "ticker": "SCHNEIDER",
     "name": "Schneider Electric Infrastructure Limited",
     "market": 372284.982495
    },
    {
     "number": 556,
     "ticker": "RPOWER",
     "name": "Reliance Power Limited",
     "market": 371652.99361699994
    },
    {
     "number": 557,
     "ticker": "ARVINDFASN",
     "name": "Arvind Fashions Limited",
     "market": 371444.013811
    },
    {
     "number": 558,
     "ticker": "TATVA",
     "name": "Tatva Chintan Pharma Chem Limited",
     "market": 369945.967311
    },
    {
     "number": 559,
     "ticker": "POWERMECH",
     "name": "Power Mech Projects Limited",
     "market": 368172.11154300004
    },
    {
     "number": 560,
     "ticker": "HCG",
     "name": "Healthcare Global Enterprises Limited",
     "market": 365110.104719
    },
    {
     "number": 561,
     "ticker": "NESCO",
     "name": "Nesco Limited",
     "market": 364771.21292
    },
    {
     "number": 562,
     "ticker": "HEIDELBERG",
     "name": "HeidelbergCement India Limited",
     "market": 364733.81020199996
    },
    {
     "number": 563,
     "ticker": "TECHNOE",
     "name": "Techno Electric & Engineering Company Limited",
     "market": 363321.808144
    },
    {
     "number": 564,
     "ticker": "POLYPLEX",
     "name": "Polyplex Corporation Limited",
     "market": 358674.57458099996
    },
    {
     "number": 565,
     "ticker": "SURYAROSNI",
     "name": "Surya Roshni Limited",
     "market": 357956.639946
    },
    {
     "number": 566,
     "ticker": "AUTOAXLES",
     "name": "Automotive Axles Limited",
     "market": 357284.8689375
    },
    {
     "number": 567,
     "ticker": "JWL",
     "name": "Jupiter Wagons Limited",
     "market": 357226.52031800005
    },
    {
     "number": 568,
     "ticker": "NFL",
     "name": "National Fertilizers Limited",
     "market": 355424.0508
    },
    {
     "number": 569,
     "ticker": "HEG",
     "name": "HEG Limited",
     "market": 355348.823742
    },
    {
     "number": 570,
     "ticker": "RAJRILTD",
     "name": "Raj Rayon Industries Limited",
     "market": 355336.714305
    },
    {
     "number": 571,
     "ticker": "CHENNPETRO",
     "name": "Chennai Petroleum Corporation Limited",
     "market": 353664.575
    },
    {
     "number": 572,
     "ticker": "WSTCSTPAPR",
     "name": "West Coast Paper Mills Limited",
     "market": 350455.50584800006
    },
    {
     "number": 573,
     "ticker": "LUXIND",
     "name": "Lux Industries Limited",
     "market": 349177.3239315
    },
    {
     "number": 574,
     "ticker": "HIKAL",
     "name": "Hikal Limited",
     "market": 347276.562375
    },
    {
     "number": 575,
     "ticker": "MIDHANI",
     "name": "Mishra Dhatu Nigam Limited",
     "market": 345923.31
    },
    {
     "number": 576,
     "ticker": "HLEGLAS",
     "name": "HLE Glascoat Limited",
     "market": 344604.14304
    },
    {
     "number": 577,
     "ticker": "SHAREINDIA",
     "name": "Share India Securities Limited",
     "market": 344502.13356
    },
    {
     "number": 578,
     "ticker": "NOCIL",
     "name": "NOCIL Limited",
     "market": 344367.4598575
    },
    {
     "number": 579,
     "ticker": "NAZARA",
     "name": "Nazara Technologies Limited",
     "market": 341756.098134
    },
    {
     "number": 580,
     "ticker": "BANARISUG",
     "name": "Bannari Amman Sugars Limited",
     "market": 339963.8067
    },
    {
     "number": 581,
     "ticker": "ANANDRATHI",
     "name": "Anand Rathi Wealth Limited",
     "market": 336715.971019
    },
    {
     "number": 582,
     "ticker": "PRUDENT",
     "name": "Prudent Corporate Advisory Services Limited",
     "market": 334814.41448
    },
    {
     "number": 583,
     "ticker": "GRAVITA",
     "name": "Gravita India Limited",
     "market": 334592.25020099996
    },
    {
     "number": 584,
     "ticker": "GREENPANEL",
     "name": "Greenpanel Industries Limited",
     "market": 333607.8280975
    },
    {
     "number": 585,
     "ticker": "VESUVIUS",
     "name": "Vesuvius India Limited",
     "market": 332348.31
    },
    {
     "number": 586,
     "ticker": "DCBBANK",
     "name": "DCB Bank Limited",
     "market": 331732.305645
    },
    {
     "number": 587,
     "ticker": "ROSSARI",
     "name": "Rossari Biotech Limited",
     "market": 328781.85204599996
    },
    {
     "number": 588,
     "ticker": "RESPONIND",
     "name": "Responsive Industries Limited",
     "market": 328702.99005
    },
    {
     "number": 589,
     "ticker": "TINPLATE",
     "name": "The Tinplate Company of India Limited",
     "market": 326301.361465
    },
    {
     "number": 590,
     "ticker": "KIRLOSBROS",
     "name": "Kirloskar Brothers Limited",
     "market": 325775.118915
    },
    {
     "number": 591,
     "ticker": "RAILTEL",
     "name": "Railtel Corporation Of India Limited",
     "market": 324468.729477
    },
    {
     "number": 592,
     "ticker": "AMIORG",
     "name": "Ami Organics Limited",
     "market": 324180.540614
    },
    {
     "number": 593,
     "ticker": "ISGEC",
     "name": "Isgec Heavy Engineering Limited",
     "market": 320809.25213
    },
    {
     "number": 594,
     "ticker": "NEOGEN",
     "name": "Neogen Chemicals Limited",
     "market": 320769.48239200003
    },
    {
     "number": 595,
     "ticker": "MARKSANS",
     "name": "Marksans Pharma Limited",
     "market": 319115.060352
    },
    {
     "number": 596,
     "ticker": "NAVA",
     "name": "NAVA LIMITED",
     "market": 316391.94115900004
    },
    {
     "number": 597,
     "ticker": "NEWGEN",
     "name": "Newgen Software Technologies Limited",
     "market": 315290.344407
    },
    {
     "number": 598,
     "ticker": "BECTORFOOD",
     "name": "Mrs. Bectors Food Specialities Limited",
     "market": 314055.902423
    },
    {
     "number": 599,
     "ticker": "TWL",
     "name": "Titagarh Wagons Limited",
     "market": 313754.53753599996
    },
    {
     "number": 600,
     "ticker": "AARTIDRUGS",
     "name": "Aarti Drugs Limited",
     "market": 312756.5
    },
    {
     "number": 601,
     "ticker": "UJJIVAN",
     "name": "Ujjivan Financial Services Limited",
     "market": 311800.115875
    },
    {
     "number": 602,
     "ticker": "GATEWAY",
     "name": "Gateway Distriparks Limited",
     "market": 311777.753664
    },
    {
     "number": 603,
     "ticker": "SULA",
     "name": "Sula Vineyards Limited",
     "market": 308714.709542
    },
    {
     "number": 604,
     "ticker": "DAAWAT",
     "name": "LT Foods Limited",
     "market": 308650.2127
    },
    {
     "number": 605,
     "ticker": "SOUTHBANK",
     "name": "The South Indian Bank Limited",
     "market": 306586.559137
    },
    {
     "number": 606,
     "ticker": "GET&D",
     "name": "GE T&D India Limited",
     "market": 305335.4929875
    },
    {
     "number": 607,
     "ticker": "HARSHA",
     "name": "Harsha Engineers International Limited",
     "market": 305043.2738025
    },
    {
     "number": 608,
     "ticker": "PGEL",
     "name": "PG Electroplast Limited",
     "market": 303011.2575995
    },
    {
     "number": 609,
     "ticker": "RSYSTEMS",
     "name": "R Systems International Limited",
     "market": 301200.57097
    },
    {
     "number": 610,
     "ticker": "INDOCO",
     "name": "Indoco Remedies Limited",
     "market": 299719.0296375
    },
    {
     "number": 611,
     "ticker": "MOLDTKPAC",
     "name": "Mold-Tek Packaging Limited",
     "market": 299062.80985049997
    },
    {
     "number": 612,
     "ticker": "IFBIND",
     "name": "IFB Industries Limited",
     "market": 298826.1205
    },
    {
     "number": 613,
     "ticker": "SBCL",
     "name": "Shivalik Bimetal Controls Limited",
     "market": 295768.7649
    },
    {
     "number": 614,
     "ticker": "BCG",
     "name": "Brightcom Group Limited",
     "market": 294616.593458
    },
    {
     "number": 615,
     "ticker": "GREAVESCOT",
     "name": "Greaves Cotton Limited",
     "market": 291993.0439135
    },
    {
     "number": 616,
     "ticker": "MOIL",
     "name": "MOIL Limited",
     "market": 289355.970042
    },
    {
     "number": 617,
     "ticker": "TATASTLLP",
     "name": "Tata Steel Long Products Limited",
     "market": 284242.75
    },
    {
     "number": 618,
     "ticker": "TARSONS",
     "name": "Tarsons Products Limited",
     "market": 283137.2243415
    },
    {
     "number": 619,
     "ticker": "SHANTIGEAR",
     "name": "Shanthi Gears Limited",
     "market": 281585.5384365
    },
    {
     "number": 620,
     "ticker": "CHOICEIN",
     "name": "Choice International Limited",
     "market": 280922.376
    },
    {
     "number": 621,
     "ticker": "TIIL",
     "name": "Technocraft Industries (India) Limited",
     "market": 278950.0545195
    },
    {
     "number": 622,
     "ticker": "DHANUKA",
     "name": "Dhanuka Agritech Limited",
     "market": 278665.872936
    },
    {
     "number": 623,
     "ticker": "JCHAC",
     "name": "Johnson Controls - Hitachi Air Conditioning India Limited",
     "market": 276408.931302
    },
    {
     "number": 624,
     "ticker": "DODLA",
     "name": "Dodla Dairy Limited",
     "market": 275897.5585625
    },
    {
     "number": 625,
     "ticker": "DALMIASUG",
     "name": "Dalmia Bharat Sugar and Industries Limited",
     "market": 273534.3744885
    },
    {
     "number": 626,
     "ticker": "VOLTAMP",
     "name": "Voltamp Transformers Limited",
     "market": 272398.39744
    },
    {
     "number": 627,
     "ticker": "ASTEC",
     "name": "Astec LifeSciences Limited",
     "market": 271538.391
    },
    {
     "number": 628,
     "ticker": "SUDARSCHEM",
     "name": "Sudarshan Chemical Industries Limited",
     "market": 270886.22925
    },
    {
     "number": 629,
     "ticker": "KSCL",
     "name": "Kaveri Seed Company Limited",
     "market": 267278.3817055
    },
    {
     "number": 630,
     "ticker": "SUNFLAG",
     "name": "Sunflag Iron And Steel Company Limited",
     "market": 265733.576076
    },
    {
     "number": 631,
     "ticker": "IBREALEST",
     "name": "Indiabulls Real Estate Limited",
     "market": 264879.236859
    },
    {
     "number": 632,
     "ticker": "THOMASCOOK",
     "name": "Thomas Cook  (India)  Limited",
     "market": 264118.685563
    },
    {
     "number": 633,
     "ticker": "HBLPOWER",
     "name": "HBL Power Systems Limited",
     "market": 264028.186065
    },
    {
     "number": 634,
     "ticker": "INOXWIND",
     "name": "Inox Wind Limited",
     "market": 263970.804161
    },
    {
     "number": 635,
     "ticker": "NILKAMAL",
     "name": "Nilkamal Limited",
     "market": 262047.0002625
    },
    {
     "number": 636,
     "ticker": "ZENTEC",
     "name": "Zen Technologies Limited",
     "market": 260912.065
    },
    {
     "number": 637,
     "ticker": "TCNSBRANDS",
     "name": "TCNS Clothing Co. Limited",
     "market": 259794.918612
    },
    {
     "number": 638,
     "ticker": "ADVENZYMES",
     "name": "Advanced Enzyme Technologies Limited",
     "market": 259431.854
    },
    {
     "number": 639,
     "ticker": "STAR",
     "name": "Strides Pharma Science Limited",
     "market": 258581.792904
    },
    {
     "number": 640,
     "ticker": "FCL",
     "name": "Fineotex Chemical Limited",
     "market": 258154.56702
    },
    {
     "number": 641,
     "ticker": "KKCL",
     "name": "Kewal Kiran Clothing Limited",
     "market": 257531.648115
    },
    {
     "number": 642,
     "ticker": "HINDWAREAP",
     "name": "Hindware Home Innovation Limited",
     "market": 256905.2396325
    },
    {
     "number": 643,
     "ticker": "MAHLOG",
     "name": "Mahindra Logistics Limited",
     "market": 255014.61729
    },
    {
     "number": 644,
     "ticker": "EMIL",
     "name": "Electronics Mart India Limited",
     "market": 254896.054825
    },
    {
     "number": 645,
     "ticker": "JTEKTINDIA",
     "name": "Jtekt India Limited",
     "market": 253648.4865875
    },
    {
     "number": 646,
     "ticker": "MANINFRA",
     "name": "Man Infraconstruction Limited",
     "market": 253192.77621
    },
    {
     "number": 647,
     "ticker": "ITDC",
     "name": "India Tourism Development Corporation Limited",
     "market": 253191.2688
    },
    {
     "number": 648,
     "ticker": "APCOTEXIND",
     "name": "Apcotex Industries Limited",
     "market": 252770.10248
    },
    {
     "number": 649,
     "ticker": "PRICOLLTD",
     "name": "Pricol Limited",
     "market": 252599.404605
    },
    {
     "number": 650,
     "ticker": "PTC",
     "name": "PTC India Limited",
     "market": 251755.07701049998
    },
    {
     "number": 651,
     "ticker": "AARTIPHARM",
     "name": "Aarti Pharmalabs Limited",
     "market": 249991.843068
    },
    {
     "number": 652,
     "ticker": "MBAPL",
     "name": "Madhya Bharat Agro Products Limited",
     "market": 249013.856745
    },
    {
     "number": 653,
     "ticker": "SAGCEM",
     "name": "Sagar Cements Limited",
     "market": 248017.57233
    },
    {
     "number": 654,
     "ticker": "TDPOWERSYS",
     "name": "TD Power Systems Limited",
     "market": 247795.70438
    },
    {
     "number": 655,
     "ticker": "JAICORPLTD",
     "name": "Jai Corp Limited",
     "market": 247241.657555
    },
    {
     "number": 656,
     "ticker": "DBL",
     "name": "Dilip Buildcon Limited",
     "market": 246957.086019
    },
    {
     "number": 657,
     "ticker": "BARBEQUE",
     "name": "Barbeque Nation Hospitality Limited",
     "market": 246791.74593150002
    },
    {
     "number": 658,
     "ticker": "UNIPARTS",
     "name": "Uniparts India Limited",
     "market": 243428.923773
    },
    {
     "number": 659,
     "ticker": "UFLEX",
     "name": "UFLEX Limited",
     "market": 242305.641273
    },
    {
     "number": 660,
     "ticker": "WONDERLA",
     "name": "Wonderla Holidays Limited",
     "market": 242214.6326775
    },
    {
     "number": 661,
     "ticker": "PSPPROJECT",
     "name": "PSP Projects Limited",
     "market": 241524
    },
    {
     "number": 662,
     "ticker": "KIRLOSIND",
     "name": "Kirloskar Industries Limited",
     "market": 240366.5641
    },
    {
     "number": 663,
     "ticker": "IPL",
     "name": "India Pesticides Limited",
     "market": 239367.351378
    },
    {
     "number": 664,
     "ticker": "DISHTV",
     "name": "Dish TV India Limited",
     "market": 239363.28702
    },
    {
     "number": 665,
     "ticker": "TATAMETALI",
     "name": "Tata Metaliks Limited",
     "market": 236799.6725
    },
    {
     "number": 666,
     "ticker": "PAISALO",
     "name": "Paisalo Digital Limited",
     "market": 236634.58873
    },
    {
     "number": 667,
     "ticker": "PFOCUS",
     "name": "Prime Focus Limited",
     "market": 236484.18043799998
    },
    {
     "number": 668,
     "ticker": "HEMIPROP",
     "name": "Hemisphere Properties India Limited",
     "market": 234697.5
    },
    {
     "number": 669,
     "ticker": "LGBBROSLTD",
     "name": "LG Balakrishnan & Bros Limited",
     "market": 233025.903968
    },
    {
     "number": 670,
     "ticker": "MAITHANALL",
     "name": "Maithan Alloys Limited",
     "market": 232892.4
    },
    {
     "number": 671,
     "ticker": "SSWL",
     "name": "Steel Strips Wheels Limited",
     "market": 231561.2794
    },
    {
     "number": 672,
     "ticker": "NEULANDLAB",
     "name": "Neuland Laboratories Limited",
     "market": 231457.6125045
    },
    {
     "number": 673,
     "ticker": "HATHWAY",
     "name": "Hathway Cable & Datacom Limited",
     "market": 229228.53275
    },
    {
     "number": 674,
     "ticker": "THYROCARE",
     "name": "Thyrocare Technologies Limited",
     "market": 227519.78983549998
    },
    {
     "number": 675,
     "ticker": "ORIENTCEM",
     "name": "Orient Cement Limited",
     "market": 225253.20162
    },
    {
     "number": 676,
     "ticker": "DREAMFOLKS",
     "name": "Dreamfolks Services Limited",
     "market": 224910.125
    },
    {
     "number": 677,
     "ticker": "ETHOSLTD",
     "name": "Ethos Limited",
     "market": 224129.28756700002
    },
    {
     "number": 678,
     "ticker": "GLOBUSSPR",
     "name": "Globus Spirits Limited",
     "market": 223682.14873400002
    },
    {
     "number": 679,
     "ticker": "GANESHHOUC",
     "name": "Ganesh Housing Corporation Limited",
     "market": 223602.481835
    },
    {
     "number": 680,
     "ticker": "ARVIND",
     "name": "Arvind Limited",
     "market": 222272.8529
    },
    {
     "number": 681,
     "ticker": "ICIL",
     "name": "Indo Count Industries Limited",
     "market": 221919.88797
    },
    {
     "number": 682,
     "ticker": "SHRIPISTON",
     "name": "Shriram Pistons & Rings Limited",
     "market": 221801.87629599997
    },
    {
     "number": 683,
     "ticker": "WOCKPHARMA",
     "name": "Wockhardt Limited",
     "market": 221751.92909700001
    },
    {
     "number": 684,
     "ticker": "DBREALTY",
     "name": "D B Realty Limited",
     "market": 221463.83439
    },
    {
     "number": 685,
     "ticker": "ISMTLTD",
     "name": "ISMT Limited",
     "market": 220718.26581349998
    },
    {
     "number": 686,
     "ticker": "JINDALPOLY",
     "name": "Jindal Poly Films Limited",
     "market": 219304.2495105
    },
    {
     "number": 687,
     "ticker": "WABAG",
     "name": "VA Tech Wabag Limited",
     "market": 218848.116132
    },
    {
     "number": 688,
     "ticker": "BAJAJCON",
     "name": "Bajaj Consumer Care Limited",
     "market": 218592.847917
    },
    {
     "number": 689,
     "ticker": "GENUSPOWER",
     "name": "Genus Power Infrastructures Limited",
     "market": 218183.35462
    },
    {
     "number": 690,
     "ticker": "BUTTERFLY",
     "name": "Butterfly Gandhimathi Appliances Limited",
     "market": 216583.9410385
    },
    {
     "number": 691,
     "ticker": "NAVNETEDUL",
     "name": "Navneet Education Limited",
     "market": 215694.26808349998
    },
    {
     "number": 692,
     "ticker": "GOKEX",
     "name": "Gokaldas Exports Limited",
     "market": 215657.65864
    },
    {
     "number": 693,
     "ticker": "APOLLOPIPE",
     "name": "Apollo Pipes Limited",
     "market": 215479.24067400003
    },
    {
     "number": 694,
     "ticker": "LANDMARK",
     "name": "Landmark Cars Limited",
     "market": 215360.49451
    },
    {
     "number": 695,
     "ticker": "IFCI",
     "name": "IFCI Limited",
     "market": 215200.95448599997
    },
    {
     "number": 696,
     "ticker": "ATFL",
     "name": "Agro Tech Foods Limited",
     "market": 213633.15285599997
    },
    {
     "number": 697,
     "ticker": "EVEREADY",
     "name": "Eveready Industries India Limited",
     "market": 212355.83009
    },
    {
     "number": 698,
     "ticker": "AGI",
     "name": "AGI Greenpac Limited",
     "market": 209490.119678
    },
    {
     "number": 699,
     "ticker": "TI",
     "name": "Tilaknagar Industries Limited",
     "market": 208878.178873
    },
    {
     "number": 700,
     "ticker": "ASHOKA",
     "name": "Ashoka Buildcon Limited",
     "market": 207735.18058
    },
    {
     "number": 701,
     "ticker": "SOMANYCERA",
     "name": "Somany Ceramics Limited",
     "market": 207635.165808
    },
    {
     "number": 702,
     "ticker": "HCC",
     "name": "Hindustan Construction Company Limited",
     "market": 207284.869428
    },
    {
     "number": 703,
     "ticker": "JISLJALEQS",
     "name": "Jain Irrigation Systems Limited",
     "market": 207090.80427
    },
    {
     "number": 704,
     "ticker": "VINDHYATEL",
     "name": "Vindhya Telelinks Limited",
     "market": 206957.5460005
    },
    {
     "number": 705,
     "ticker": "FIEMIND",
     "name": "Fiem Industries Limited",
     "market": 206056.61814
    },
    {
     "number": 706,
     "ticker": "TASTYBITE",
     "name": "Tasty Bite Eatables Limited",
     "market": 205853.501
    },
    {
     "number": 707,
     "ticker": "JAYNECOIND",
     "name": "Jayaswal Neco Industries Limited",
     "market": 205366.12860599998
    },
    {
     "number": 708,
     "ticker": "HONDAPOWER",
     "name": "Honda India Power Products Limited",
     "market": 204301.73608200002
    },
    {
     "number": 709,
     "ticker": "UNICHEMLAB",
     "name": "Unichem Laboratories Limited",
     "market": 203965.45775
    },
    {
     "number": 710,
     "ticker": "MUKANDLTD",
     "name": "Mukand Limited",
     "market": 203810.9916115
    },
    {
     "number": 711,
     "ticker": "CIGNITITEC",
     "name": "Cigniti Technologies Limited",
     "market": 203336.91414
    },
    {
     "number": 712,
     "ticker": "MMFL",
     "name": "MM Forgings Limited",
     "market": 202577.5232
    },
    {
     "number": 713,
     "ticker": "VENKEYS",
     "name": "Venky's (India) Limited",
     "market": 202547.70263
    },
    {
     "number": 714,
     "ticker": "RAMKY",
     "name": "Ramky Infrastructure Limited",
     "market": 201815.35745150002
    },
    {
     "number": 715,
     "ticker": "DIVGIITTS",
     "name": "Divgi Torqtransfer Systems Limited",
     "market": 201373.28283150002
    },
    {
     "number": 716,
     "ticker": "CAMLINFINE",
     "name": "Camlin Fine Sciences Limited",
     "market": 200215.66065200002
    },
    {
     "number": 717,
     "ticker": "SHILPAMED",
     "name": "Shilpa Medicare Limited",
     "market": 198646.14357299998
    },
    {
     "number": 718,
     "ticker": "GULFOILLUB",
     "name": "Gulf Oil Lubricants India Limited",
     "market": 198249.604327
    },
    {
     "number": 719,
     "ticker": "MOL",
     "name": "Meghmani Organics Limited",
     "market": 197602.141947
    },
    {
     "number": 720,
     "ticker": "DOLLAR",
     "name": "Dollar Industries Limited",
     "market": 197258.66536
    },
    {
     "number": 721,
     "ticker": "VSTTILLERS",
     "name": "V.S.T Tillers Tractors Limited",
     "market": 196493.105068
    },
    {
     "number": 722,
     "ticker": "SUBROS",
     "name": "Subros Limited",
     "market": 195739.867875
    },
    {
     "number": 723,
     "ticker": "DCAL",
     "name": "Dishman Carbogen Amcis Limited",
     "market": 195586.9110125
    },
    {
     "number": 724,
     "ticker": "GABRIEL",
     "name": "Gabriel India Limited",
     "market": 195427.58037
    },
    {
     "number": 725,
     "ticker": "MAXVIL",
     "name": "Max Ventures and Industries Limited",
     "market": 195206.51170200002
    },
    {
     "number": 726,
     "ticker": "SIYSIL",
     "name": "Siyaram Silk Mills Limited",
     "market": 195073.27296
    },
    {
     "number": 727,
     "ticker": "TVSSRICHAK",
     "name": "TVS Srichakra Limited",
     "market": 194875.751025
    },
    {
     "number": 728,
     "ticker": "ASTRAMICRO",
     "name": "Astra Microwave Products Limited",
     "market": 194616.433725
    },
    {
     "number": 729,
     "ticker": "JKIL",
     "name": "J.Kumar Infraprojects Limited",
     "market": 192493.04726400002
    },
    {
     "number": 730,
     "ticker": "JAGRAN",
     "name": "Jagran Prakashan Limited",
     "market": 191281.174336
    },
    {
     "number": 731,
     "ticker": "ELECTCAST",
     "name": "Electrosteel Castings Limited",
     "market": 190868.28428700002
    },
    {
     "number": 732,
     "ticker": "CARERATING",
     "name": "CARE Ratings Limited",
     "market": 190787.417468
    },
    {
     "number": 733,
     "ticker": "INDIAGLYCO",
     "name": "India Glycols Limited",
     "market": 190289.379
    },
    {
     "number": 734,
     "ticker": "BALMLAWRIE",
     "name": "Balmer Lawrie & Company Limited",
     "market": 189643.265214
    },
    {
     "number": 735,
     "ticker": "KOLTEPATIL",
     "name": "Kolte - Patil Developers Limited",
     "market": 189440.9894325
    },
    {
     "number": 736,
     "ticker": "IMAGICAA",
     "name": "Imagicaaworld Entertainment Limited",
     "market": 188482.83718200002
    },
    {
     "number": 737,
     "ticker": "WELENT",
     "name": "Welspun Enterprises Limited",
     "market": 188303.726808
    },
    {
     "number": 738,
     "ticker": "TIPSINDLTD",
     "name": "TIPS Industries Limited",
     "market": 187547.7707065
    },
    {
     "number": 739,
     "ticker": "SWARAJENG",
     "name": "Swaraj Engines Limited",
     "market": 186980.303862
    },
    {
     "number": 740,
     "ticker": "MAYURUNIQ",
     "name": "Mayur Uniquoters Ltd",
     "market": 184622.8963
    },
    {
     "number": 741,
     "ticker": "GANECOS",
     "name": "Ganesha Ecosphere Limited",
     "market": 184316.5135695
    },
    {
     "number": 742,
     "ticker": "PARAS",
     "name": "Paras Defence and Space Technologies Limited",
     "market": 183436.7869135
    },
    {
     "number": 743,
     "ticker": "LUMAXTECH",
     "name": "Lumax Auto Technologies Limited",
     "market": 183276.068745
    },
    {
     "number": 744,
     "ticker": "ACCELYA",
     "name": "Accelya Solutions India Limited",
     "market": 182055.605417
    },
    {
     "number": 745,
     "ticker": "KESORAMIND",
     "name": "Kesoram Industries Limited",
     "market": 182023.089116
    },
    {
     "number": 746,
     "ticker": "CARTRADE",
     "name": "Cartrade Tech Limited",
     "market": 181964.4857355
    },
    {
     "number": 747,
     "ticker": "MPSLTD",
     "name": "MPS Limited",
     "market": 181646.660104
    },
    {
     "number": 748,
     "ticker": "SEQUENT",
     "name": "Sequent Scientific Limited",
     "market": 181088.71737
    },
    {
     "number": 749,
     "ticker": "HIL",
     "name": "HIL Limited",
     "market": 180964.9337545
    },
    {
     "number": 750,
     "ticker": "GUFICBIO",
     "name": "Gufic Biosciences Limited",
     "market": 180704.559184
    },
    {
     "number": 751,
     "ticker": "ITDCEM",
     "name": "ITD Cementation India Limited",
     "market": 179260.343904
    },
    {
     "number": 752,
     "ticker": "PILANIINVS",
     "name": "Pilani Investment and Industries Corporation Limited",
     "market": 179226.51075
    },
    {
     "number": 753,
     "ticker": "MSTCLTD",
     "name": "Mstc Limited",
     "market": 178041.6
    },
    {
     "number": 754,
     "ticker": "LSIL",
     "name": "Lloyds Steels Industries Limited",
     "market": 177404.08207150002
    },
    {
     "number": 755,
     "ticker": "PANAMAPET",
     "name": "Panama Petrochem Limited",
     "market": 176762.29335599998
    },
    {
     "number": 756,
     "ticker": "OPTIEMUS",
     "name": "Optiemus Infracom Limited",
     "market": 176694.099078
    },
    {
     "number": 757,
     "ticker": "SIRCA",
     "name": "Sirca Paints India Limited",
     "market": 176635.0602
    },
    {
     "number": 758,
     "ticker": "TIRUMALCHM",
     "name": "Thirumalai Chemicals Limited",
     "market": 175902.79016
    },
    {
     "number": 759,
     "ticker": "DYNAMATECH",
     "name": "Dynamatic Technologies Limited",
     "market": 175176.021432
    },
    {
     "number": 760,
     "ticker": "SUNDARMHLD",
     "name": "Sundaram Finance Holdings Limited",
     "market": 175128.89361
    },
    {
     "number": 761,
     "ticker": "TIMETECHNO",
     "name": "Time Technoplast Limited",
     "market": 174132.9975
    },
    {
     "number": 762,
     "ticker": "DBCORP",
     "name": "D.B.Corp Limited",
     "market": 173579.3179345
    },
    {
     "number": 763,
     "ticker": "ASHIANA",
     "name": "Ashiana Housing Limited",
     "market": 173077.399409
    },
    {
     "number": 764,
     "ticker": "CONFIPET",
     "name": "Confidence Petroleum India Limited",
     "market": 172963.261107
    },
    {
     "number": 765,
     "ticker": "DIAMONDYD",
     "name": "Prataap Snacks Limited",
     "market": 172743.336658
    },
    {
     "number": 766,
     "ticker": "NUCLEUS",
     "name": "Nucleus Software Exports Limited",
     "market": 171161.860332
    },
    {
     "number": 767,
     "ticker": "GREENPLY",
     "name": "Greenply Industries Limited",
     "market": 170736.7508525
    },
    {
     "number": 768,
     "ticker": "JPASSOCIAT",
     "name": "Jaiprakash Associates Limited",
     "market": 170594.39698
    },
    {
     "number": 769,
     "ticker": "WENDT",
     "name": "Wendt (India) Limited",
     "market": 170174
    },
    {
     "number": 770,
     "ticker": "FINOPB",
     "name": "Fino Payments Bank Limited",
     "market": 169965.211835
    },
    {
     "number": 771,
     "ticker": "FMGOETZE",
     "name": "Federal-Mogul Goetze (India) Limited.",
     "market": 169956.15715
    },
    {
     "number": 772,
     "ticker": "SANGHIIND",
     "name": "Sanghi Industries Limited",
     "market": 169849.345
    },
    {
     "number": 773,
     "ticker": "VAKRANGEE",
     "name": "Vakrangee Limited",
     "market": 169519.9664
    },
    {
     "number": 774,
     "ticker": "GNA",
     "name": "GNA Axles Limited",
     "market": 169093.6885
    },
    {
     "number": 775,
     "ticker": "AMRUTANJAN",
     "name": "Amrutanjan Health Care Limited",
     "market": 168368.4288
    },
    {
     "number": 776,
     "ticker": "EMUDHRA",
     "name": "eMudhra Limited",
     "market": 167738.48909350001
    },
    {
     "number": 777,
     "ticker": "DATAMATICS",
     "name": "Datamatics Global Services Limited",
     "market": 167534.015754
    },
    {
     "number": 778,
     "ticker": "SHARDAMOTR",
     "name": "Sharda Motor Industries Limited",
     "market": 166853.90756
    },
    {
     "number": 779,
     "ticker": "IOLCP",
     "name": "IOL Chemicals and Pharmaceuticals Limited",
     "market": 166048.512407
    },
    {
     "number": 780,
     "ticker": "LUMAXIND",
     "name": "Lumax Industries Limited",
     "market": 165384.74841
    },
    {
     "number": 781,
     "ticker": "BAJAJHIND",
     "name": "Bajaj Hindusthan Sugar Limited",
     "market": 164779.432518
    },
    {
     "number": 782,
     "ticker": "STYLAMIND",
     "name": "Stylam Industries Limited",
     "market": 164608.03275
    },
    {
     "number": 783,
     "ticker": "ANDHRAPAP",
     "name": "ANDHRA PAPER LIMITED",
     "market": 164588.30640149998
    },
    {
     "number": 784,
     "ticker": "SOTL",
     "name": "Savita Oil Technologies Limited",
     "market": 163802.5337575
    },
    {
     "number": 785,
     "ticker": "ADFFOODS",
     "name": "ADF Foods Limited",
     "market": 163433.08392200002
    },
    {
     "number": 786,
     "ticker": "VIDHIING",
     "name": "Vidhi Specialty Food Ingredients Limited",
     "market": 162820.7
    },
    {
     "number": 787,
     "ticker": "KABRAEXTRU",
     "name": "Kabra Extrusion Technik Limited",
     "market": 162664.930805
    },
    {
     "number": 788,
     "ticker": "BEPL",
     "name": "Bhansali Engineering Polymers Limited",
     "market": 162587.5272
    },
    {
     "number": 789,
     "ticker": "RUPA",
     "name": "Rupa & Company Limited",
     "market": 162428.9138
    },
    {
     "number": 790,
     "ticker": "NACLIND",
     "name": "NACL Industries Limited",
     "market": 162117.452975
    },
    {
     "number": 791,
     "ticker": "VSSL",
     "name": "Vardhman Special Steels Limited",
     "market": 161372.08840799998
    },
    {
     "number": 792,
     "ticker": "VISHNU",
     "name": "Vishnu Chemicals Limited",
     "market": 161331.0001
    },
    {
     "number": 793,
     "ticker": "DWARKESH",
     "name": "Dwarikesh Sugar Industries Limited",
     "market": 160715.304645
    },
    {
     "number": 794,
     "ticker": "DHANI",
     "name": "Dhani Services Limited",
     "market": 160158.4515045
    },
    {
     "number": 795,
     "ticker": "BANCOINDIA",
     "name": "Banco Products (I) Limited",
     "market": 160094.498025
    },
    {
     "number": 796,
     "ticker": "KINGFA",
     "name": "Kingfa Science & Technology (India) Limited",
     "market": 159621.93121049998
    },
    {
     "number": 797,
     "ticker": "SUBEXLTD",
     "name": "Subex Limited",
     "market": 159608.83354
    },
    {
     "number": 798,
     "ticker": "HINDOILEXP",
     "name": "Hindustan Oil Exploration Company Limited",
     "market": 159017.7486
    },
    {
     "number": 799,
     "ticker": "RTNPOWER",
     "name": "RattanIndia Power Limited",
     "market": 158418.12287
    },
    {
     "number": 800,
     "ticker": "VADILALIND",
     "name": "Vadilal Industries Limited",
     "market": 157855.528545
    },
    {
     "number": 801,
     "ticker": "BBOX",
     "name": "Black Box Limited",
     "market": 156738.953435
    },
    {
     "number": 802,
     "ticker": "ORCHPHARMA",
     "name": "Orchid Pharma Limited",
     "market": 156428.853
    },
    {
     "number": 803,
     "ticker": "PURVA",
     "name": "Puravankara Limited",
     "market": 154977.319801
    },
    {
     "number": 804,
     "ticker": "COSMOFIRST",
     "name": "COSMO FIRST LIMITED",
     "market": 154164.646671
    },
    {
     "number": 805,
     "ticker": "IMFA",
     "name": "Indian Metals & Ferro Alloys Limited",
     "market": 153742.225047
    },
    {
     "number": 806,
     "ticker": "SUPRIYA",
     "name": "Supriya Lifescience Limited",
     "market": 153520.941
    },
    {
     "number": 807,
     "ticker": "SAKSOFT",
     "name": "Saksoft Limited",
     "market": 152986.275
    },
    {
     "number": 808,
     "ticker": "IIFLSEC",
     "name": "IIFL Securities Limited",
     "market": 152842.641952
    },
    {
     "number": 809,
     "ticker": "SANGHVIMOV",
     "name": "Sanghvi Movers Limited",
     "market": 152438.692
    },
    {
     "number": 810,
     "ticker": "GOKULAGRO",
     "name": "Gokul Agro Resources Limited",
     "market": 151674.572024
    },
    {
     "number": 811,
     "ticker": "ALEMBICLTD",
     "name": "Alembic Limited",
     "market": 151629.669434
    },
    {
     "number": 812,
     "ticker": "VENUSPIPES",
     "name": "Venus Pipes & Tubes Limited",
     "market": 151408.9806
    },
    {
     "number": 813,
     "ticker": "SEAMECLTD",
     "name": "Seamec Limited",
     "market": 151291.4625
    },
    {
     "number": 814,
     "ticker": "TNPL",
     "name": "Tamil Nadu Newsprint & Papers Limited",
     "market": 151086.7398
    },
    {
     "number": 815,
     "ticker": "KPIGREEN",
     "name": "KPI Green Energy Limited",
     "market": 150895.584
    },
    {
     "number": 816,
     "ticker": "BFINVEST",
     "name": "BF Investment Limited",
     "market": 150237.334278
    },
    {
     "number": 817,
     "ticker": "SESHAPAPER",
     "name": "Seshasayee Paper and Boards Limited",
     "market": 148651.60598
    },
    {
     "number": 818,
     "ticker": "DHAMPURSUG",
     "name": "Dhampur Sugar Mills Limited",
     "market": 148409.457445
    },
    {
     "number": 819,
     "ticker": "ANDHRSUGAR",
     "name": "The Andhra Sugars Limited",
     "market": 147055.89815
    },
    {
     "number": 820,
     "ticker": "KIRIINDUS",
     "name": "Kiri Industries Limited",
     "market": 146716.7342355
    },
    {
     "number": 821,
     "ticker": "TTKHLTCARE",
     "name": "TTK Healthcare Limited",
     "market": 146672.85654
    },
    {
     "number": 822,
     "ticker": "CARYSIL",
     "name": "CARYSIL LIMITED",
     "market": 146040.938155
    },
    {
     "number": 823,
     "ticker": "GOCLCORP",
     "name": "GOCL Corporation Limited",
     "market": 146040.55554
    },
    {
     "number": 824,
     "ticker": "JSWISPL",
     "name": "JSW Ispat Special Products Limited",
     "market": 146029.283074
    },
    {
     "number": 825,
     "ticker": "STERTOOLS",
     "name": "Sterling Tools Limited",
     "market": 145015.4613805
    },
    {
     "number": 826,
     "ticker": "SHALBY",
     "name": "Shalby Limited",
     "market": 144949.11134
    },
    {
     "number": 827,
     "ticker": "TIDEWATER",
     "name": "Tide Water Oil Company (India) Limited",
     "market": 144601.776
    },
    {
     "number": 828,
     "ticker": "KRSNAA",
     "name": "Krsnaa Diagnostics Limited",
     "market": 144491.815026
    },
    {
     "number": 829,
     "ticker": "KRISHANA",
     "name": "Krishana Phoschem Limited",
     "market": 144118.665
    },
    {
     "number": 830,
     "ticker": "HUHTAMAKI",
     "name": "Huhtamaki India Limited",
     "market": 143114.06493
    },
    {
     "number": 831,
     "ticker": "BBL",
     "name": "Bharat Bijlee Limited",
     "market": 143105.97654
    },
    {
     "number": 832,
     "ticker": "SEPC",
     "name": "SEPC Limited",
     "market": 142625.39595200002
    },
    {
     "number": 833,
     "ticker": "ORISSAMINE",
     "name": "The Orissa Minerals Development Company Limited",
     "market": 142155
    },
    {
     "number": 834,
     "ticker": "FILATEX",
     "name": "Filatex India Limited",
     "market": 141985.105625
    },
    {
     "number": 835,
     "ticker": "THEJO",
     "name": "Thejo Engineering Limited",
     "market": 141953.558349
    },
    {
     "number": 836,
     "ticker": "APTECHT",
     "name": "Aptech Limited",
     "market": 141272.6883375
    },
    {
     "number": 837,
     "ticker": "ORIENTHOT",
     "name": "Oriental Hotels Limited",
     "market": 140736.15384
    },
    {
     "number": 838,
     "ticker": "DCXINDIA",
     "name": "DCX Systems Limited",
     "market": 140684.5794695
    },
    {
     "number": 839,
     "ticker": "FOSECOIND",
     "name": "Foseco India Limited",
     "market": 140444.619869
    },
    {
     "number": 840,
     "ticker": "GOLDIAM",
     "name": "Goldiam International Limited",
     "market": 140032.380275
    },
    {
     "number": 841,
     "ticker": "SHANKARA",
     "name": "Shankara Building Products Limited",
     "market": 139974.97107600002
    },
    {
     "number": 842,
     "ticker": "INSECTICID",
     "name": "Insecticides (India) Limited",
     "market": 138207.0998715
    },
    {
     "number": 843,
     "ticker": "THANGAMAYL",
     "name": "Thangamayil Jewellery Limited",
     "market": 137895.518682
    },
    {
     "number": 844,
     "ticker": "SHK",
     "name": "S H Kelkar and Company Limited",
     "market": 137728.696995
    },
    {
     "number": 845,
     "ticker": "TEXRAIL",
     "name": "Texmaco Rail & Engineering Limited",
     "market": 136633.7704275
    },
    {
     "number": 846,
     "ticker": "CANTABIL",
     "name": "Cantabil Retail India Limited",
     "market": 135674.258676
    },
    {
     "number": 847,
     "ticker": "GALLANTT",
     "name": "Gallantt Ispat Limited",
     "market": 134272.8458925
    },
    {
     "number": 848,
     "ticker": "HERITGFOOD",
     "name": "Heritage Foods Limited",
     "market": 133765.434
    },
    {
     "number": 849,
     "ticker": "KCP",
     "name": "KCP Limited",
     "market": 133433.4006
    },
    {
     "number": 850,
     "ticker": "MOREPENLAB",
     "name": "Morepen Laboratories Limited",
     "market": 131881.526664
    },
    {
     "number": 851,
     "ticker": "GATI",
     "name": "GATI Limited",
     "market": 130780.767585
    },
    {
     "number": 852,
     "ticker": "RAMASTEEL",
     "name": "Rama Steel Tubes Limited",
     "market": 129731.6567625
    },
    {
     "number": 853,
     "ticker": "HESTERBIO",
     "name": "Hester Biosciences Limited",
     "market": 129542.54022
    },
    {
     "number": 854,
     "ticker": "NRBBEARING",
     "name": "NRB Bearing Limited",
     "market": 129488.5936
    },
    {
     "number": 855,
     "ticker": "INDOSTAR",
     "name": "IndoStar Capital Finance Limited",
     "market": 129032.74732450001
    },
    {
     "number": 856,
     "ticker": "MONTECARLO",
     "name": "Monte Carlo Fashions Limited",
     "market": 128901.60792
    },
    {
     "number": 857,
     "ticker": "KSL",
     "name": "Kalyani Steels Limited",
     "market": 128689.22088
    },
    {
     "number": 858,
     "ticker": "KDDL",
     "name": "KDDL Limited",
     "market": 128568.134835
    },
    {
     "number": 859,
     "ticker": "TCPLPACK",
     "name": "TCPL Packaging Limited",
     "market": 128200.8
    },
    {
     "number": 860,
     "ticker": "MARATHON",
     "name": "Marathon Nextgen Realty Limited",
     "market": 128016.61718799999
    },
    {
     "number": 861,
     "ticker": "ARVSMART",
     "name": "Arvind SmartSpaces Limited",
     "market": 128006.340675
    },
    {
     "number": 862,
     "ticker": "DCW",
     "name": "DCW Limited",
     "market": 127949.69986950001
    },
    {
     "number": 863,
     "ticker": "DEN",
     "name": "Den Networks Limited",
     "market": 127895.99046
    },
    {
     "number": 864,
     "ticker": "STEELXIND",
     "name": "STEEL EXCHANGE INDIA LIMITED",
     "market": 127414.58895
    },
    {
     "number": 865,
     "ticker": "EIHAHOTELS",
     "name": "EIH Associated Hotels Limited",
     "market": 127143.577431
    },
    {
     "number": 866,
     "ticker": "IGPL",
     "name": "IG Petrochemicals Limited",
     "market": 127074.948525
    },
    {
     "number": 867,
     "ticker": "NITINSPIN",
     "name": "Nitin Spinners Limited",
     "market": 126635.55
    },
    {
     "number": 868,
     "ticker": "EXPLEOSOL",
     "name": "Expleo Solutions Limited",
     "market": 125987.6619225
    },
    {
     "number": 869,
     "ticker": "VERANDA",
     "name": "Veranda Learning Solutions Limited",
     "market": 125853.27224399999
    },
    {
     "number": 870,
     "ticker": "SALASAR",
     "name": "Salasar Techno Engineering Limited",
     "market": 125808.55408
    },
    {
     "number": 871,
     "ticker": "STYRENIX",
     "name": "Styrenix Performance Materials Limited",
     "market": 125789.975625
    },
    {
     "number": 872,
     "ticker": "ADORWELD",
     "name": "Ador Welding Limited",
     "market": 125187.487202
    },
    {
     "number": 873,
     "ticker": "BHAGCHEM",
     "name": "Bhagiradha Chemicals & Industries Limited",
     "market": 124657.68634
    },
    {
     "number": 874,
     "ticker": "PCJEWELLER",
     "name": "PC Jeweller Limited",
     "market": 124495.54218
    },
    {
     "number": 875,
     "ticker": "GENESYS",
     "name": "Genesys International Corporation Limited",
     "market": 124045.916274
    },
    {
     "number": 876,
     "ticker": "STOVEKRAFT",
     "name": "Stove Kraft Limited",
     "market": 123844.48125
    },
    {
     "number": 877,
     "ticker": "RANEHOLDIN",
     "name": "Rane Holdings Limited",
     "market": 123638.6870355
    },
    {
     "number": 878,
     "ticker": "NDTV",
     "name": "New Delhi Television Limited",
     "market": 123591.41883899999
    },
    {
     "number": 879,
     "ticker": "XPROINDIA",
     "name": "Xpro India Limited",
     "market": 122623.99852
    },
    {
     "number": 880,
     "ticker": "MANORAMA",
     "name": "Manorama Industries Limited",
     "market": 122440.28832
    },
    {
     "number": 881,
     "ticker": "GRWRHITECH",
     "name": "Garware Hi-Tech Films Limited",
     "market": 122260.473425
    },
    {
     "number": 882,
     "ticker": "HARIOMPIPE",
     "name": "Hariom Pipe Industries Limited",
     "market": 121941.850446
    },
    {
     "number": 883,
     "ticker": "SANDHAR",
     "name": "Sandhar Technologies Limited",
     "market": 121494.94409799999
    },
    {
     "number": 884,
     "ticker": "AVTNPL",
     "name": "AVT Natural Products Limited",
     "market": 120913.496
    },
    {
     "number": 885,
     "ticker": "IWEL",
     "name": "Inox Wind Energy Limited",
     "market": 120741.6275
    },
    {
     "number": 886,
     "ticker": "SJS",
     "name": "S.J.S. Enterprises Limited",
     "market": 120549.318792
    },
    {
     "number": 887,
     "ticker": "EVERESTIND",
     "name": "Everest Industries Limited",
     "market": 118937.682937
    },
    {
     "number": 888,
     "ticker": "FAIRCHEMOR",
     "name": "Fairchem Organics Limited",
     "market": 118900.36661299999
    },
    {
     "number": 889,
     "ticker": "SASKEN",
     "name": "Sasken Technologies Limited",
     "market": 118390.15128600001
    },
    {
     "number": 890,
     "ticker": "OAL",
     "name": "Oriental Aromatics Limited",
     "market": 118241.839276
    },
    {
     "number": 891,
     "ticker": "NELCO",
     "name": "NELCO Limited",
     "market": 118073.8108
    },
    {
     "number": 892,
     "ticker": "RIIL",
     "name": "Reliance Industrial Infrastructure Limited",
     "market": 118059.35
    },
    {
     "number": 893,
     "ticker": "SOLARA",
     "name": "Solara Active Pharma Sciences Limited",
     "market": 117869.77629149999
    },
    {
     "number": 894,
     "ticker": "TAJGVK",
     "name": "Taj GVK Hotels & Resorts Limited",
     "market": 117722.0568625
    },
    {
     "number": 895,
     "ticker": "BOMDYEING",
     "name": "Bombay Dyeing & Mfg Company Limited",
     "market": 117208.55575
    },
    {
     "number": 896,
     "ticker": "MANGCHEFER",
     "name": "Mangalore Chemicals & Fertilizers Limited",
     "market": 116026.33185
    },
    {
     "number": 897,
     "ticker": "GOODLUCK",
     "name": "Goodluck India Limited",
     "market": 115907.203125
    },
    {
     "number": 898,
     "ticker": "RPGLIFE",
     "name": "RPG Life Sciences Limited",
     "market": 115847.5305675
    },
    {
     "number": 899,
     "ticker": "PATELENG",
     "name": "Patel Engineering Limited",
     "market": 115655.775586
    },
    {
     "number": 900,
     "ticker": "SPIC",
     "name": "Southern Petrochemicals Industries Corporation  Limited",
     "market": 114954.969672
    },
    {
     "number": 901,
     "ticker": "INOXGREEN",
     "name": "Inox Green Energy Services Limited",
     "market": 114878.127929
    },
    {
     "number": 902,
     "ticker": "GIPCL",
     "name": "Gujarat Industries Power Company Limited",
     "market": 114799.65169200001
    },
    {
     "number": 903,
     "ticker": "UNIVCABLES",
     "name": "Universal Cables Limited",
     "market": 114715.523208
    },
    {
     "number": 904,
     "ticker": "NSIL",
     "name": "Nalwa Sons Investments Limited",
     "market": 114505.617922
    },
    {
     "number": 905,
     "ticker": "HMT",
     "name": "HMT Limited",
     "market": 113765.48982
    },
    {
     "number": 906,
     "ticker": "MATRIMONY",
     "name": "Matrimony.Com Limited",
     "market": 113725.40571
    },
    {
     "number": 907,
     "ticker": "MTNL",
     "name": "Mahanagar Telephone Nigam Limited",
     "market": 113715
    },
    {
     "number": 908,
     "ticker": "SDBL",
     "name": "Som Distilleries & Breweries Limited",
     "market": 113523.67784700001
    },
    {
     "number": 909,
     "ticker": "VALIANTORG",
     "name": "Valiant Organics Limited",
     "market": 113189.314728
    },
    {
     "number": 910,
     "ticker": "ARMANFIN",
     "name": "Arman Financial Services Limited",
     "market": 112901.33436299999
    },
    {
     "number": 911,
     "ticker": "REPCOHOME",
     "name": "Repco Home Finance Limited",
     "market": 112454.048195
    },
    {
     "number": 912,
     "ticker": "HERANBA",
     "name": "Heranba Industries Limited",
     "market": 111997.694133
    },
    {
     "number": 913,
     "ticker": "BFUTILITIE",
     "name": "BF Utilities Limited",
     "market": 111929.35660200001
    },
    {
     "number": 914,
     "ticker": "PRECWIRE",
     "name": "Precision Wires India Limited",
     "market": 111097.5079725
    },
    {
     "number": 915,
     "ticker": "AXITA",
     "name": "Axita Cotton Limited",
     "market": 110958.12
    },
    {
     "number": 916,
     "ticker": "GRMOVER",
     "name": "GRM Overseas Limited",
     "market": 110070
    },
    {
     "number": 917,
     "ticker": "GTPL",
     "name": "GTPL Hathway Limited",
     "market": 109820.15660700001
    },
    {
     "number": 918,
     "ticker": "IGARASHI",
     "name": "Igarashi Motors India Limited",
     "market": 109564.642088
    },
    {
     "number": 919,
     "ticker": "INFOBEAN",
     "name": "InfoBeans Technologies Limited",
     "market": 109116.429605
    },
    {
     "number": 920,
     "ticker": "ALICON",
     "name": "Alicon Castalloy Limited",
     "market": 109044.93312
    },
    {
     "number": 921,
     "ticker": "THEMISMED",
     "name": "Themis Medicare Limited",
     "market": 108578.881845
    },
    {
     "number": 922,
     "ticker": "TVTODAY",
     "name": "TV Today Network Limited",
     "market": 108000.19315
    },
    {
     "number": 923,
     "ticker": "WHEELS",
     "name": "Wheels India Limited",
     "market": 107965.639467
    },
    {
     "number": 924,
     "ticker": "RPSGVENT",
     "name": "RPSG VENTURES LIMITED",
     "market": 107687.131441
    },
    {
     "number": 925,
     "ticker": "RAMCOIND",
     "name": "Ramco Industries Limited",
     "market": 107686.63893
    },
    {
     "number": 926,
     "ticker": "SMLISUZU",
     "name": "SML Isuzu Limited",
     "market": 107451.97155
    },
    {
     "number": 927,
     "ticker": "AHL",
     "name": "Abans Holdings Limited",
     "market": 107036.530275
    },
    {
     "number": 928,
     "ticker": "UNIENTER",
     "name": "Uniphos Enterprises Limited",
     "market": 106196.51142299999
    },
    {
     "number": 929,
     "ticker": "SATIN",
     "name": "Satin Creditcare Network Limited",
     "market": 105985.9231875
    },
    {
     "number": 930,
     "ticker": "KUANTUM",
     "name": "Kuantum Papers Limited",
     "market": 105894.415005
    },
    {
     "number": 931,
     "ticker": "GANESHBE",
     "name": "Ganesh Benzoplast Limited",
     "market": 105859.499704
    },
    {
     "number": 932,
     "ticker": "SUVEN",
     "name": "Suven Life Sciences Limited",
     "market": 105765.752745
    },
    {
     "number": 933,
     "ticker": "SATIA",
     "name": "Satia Industries Limited",
     "market": 105500
    },
    {
     "number": 934,
     "ticker": "GULPOLY",
     "name": "Gulshan Polyols Limited",
     "market": 105146.41424700001
    },
    {
     "number": 935,
     "ticker": "UGARSUGAR",
     "name": "The Ugar Sugar Works Limited",
     "market": 104287.5
    },
    {
     "number": 936,
     "ticker": "MANALIPETC",
     "name": "Manali Petrochemicals Limited",
     "market": 103715.53508700001
    },
    {
     "number": 937,
     "ticker": "PIXTRANS",
     "name": "Pix Transmissions Limited",
     "market": 103626.4586
    },
    {
     "number": 938,
     "ticker": "SHRIRAMPPS",
     "name": "Shriram Properties Limited",
     "market": 103423.147548
    },
    {
     "number": 939,
     "ticker": "RADIANTCMS",
     "name": "Radiant Cash Management Services Limited",
     "market": 103079.83719600001
    },
    {
     "number": 940,
     "ticker": "PNBGILTS",
     "name": "PNB Gilts Limited",
     "market": 102965.79664799999
    },
    {
     "number": 941,
     "ticker": "INDORAMA",
     "name": "Indo Rama Synthetics (India) Limited",
     "market": 102617.46834299999
    },
    {
     "number": 942,
     "ticker": "ASHAPURMIN",
     "name": "Ashapura Minechem Limited",
     "market": 102555.915858
    },
    {
     "number": 943,
     "ticker": "UGROCAP",
     "name": "Ugro Capital Limited",
     "market": 102346.29220950001
    },
    {
     "number": 944,
     "ticker": "AXISCADES",
     "name": "AXISCADES Technologies Limited",
     "market": 102183.15425
    },
    {
     "number": 945,
     "ticker": "HITECH",
     "name": "Hi-Tech Pipes Limited",
     "market": 102057.0835
    },
    {
     "number": 946,
     "ticker": "PUNJABCHEM",
     "name": "Punjab Chemicals & Crop Protection Limited",
     "market": 101506.36743
    },
    {
     "number": 947,
     "ticker": "SURYODAY",
     "name": "Suryoday Small Finance Bank Limited",
     "market": 101116.2084225
    },
    {
     "number": 948,
     "ticker": "EKC",
     "name": "Everest Kanto Cylinder Limited",
     "market": 101099.121482
    },
    {
     "number": 949,
     "ticker": "JASH",
     "name": "Jash Engineering Limited",
     "market": 100997.512389
    },
    {
     "number": 950,
     "ticker": "DPSCLTD",
     "name": "DPSC Limited",
     "market": 100787.22774
    },
    {
     "number": 951,
     "ticker": "TARC",
     "name": "TARC Limited",
     "market": 100627.850235
    },
    {
     "number": 952,
     "ticker": "BHARATWIRE",
     "name": "Bharat Wire Ropes Limited",
     "market": 99993.92905600001
    },
    {
     "number": 953,
     "ticker": "EXCELINDUS",
     "name": "Excel Industries Limited",
     "market": 99943.286746
    },
    {
     "number": 954,
     "ticker": "SPECIALITY",
     "name": "Speciality Restaurants Limited",
     "market": 99761.5422965
    },
    {
     "number": 955,
     "ticker": "ANUP",
     "name": "The Anup Engineering Limited",
     "market": 99129.73455
    },
    {
     "number": 956,
     "ticker": "SKIPPER",
     "name": "Skipper Limited",
     "market": 98768.743944
    },
    {
     "number": 957,
     "ticker": "AJMERA",
     "name": "Ajmera Realty & Infra India Limited",
     "market": 98257.618875
    },
    {
     "number": 958,
     "ticker": "SHALPAINTS",
     "name": "Shalimar Paints Limited",
     "market": 98251.12782299999
    },
    {
     "number": 959,
     "ticker": "GMBREW",
     "name": "GM Breweries Limited",
     "market": 97702.5847245
    },
    {
     "number": 960,
     "ticker": "SANGAMIND",
     "name": "Sangam (India) Limited",
     "market": 96872.62512950001
    },
    {
     "number": 961,
     "ticker": "SHIVALIK",
     "name": "Shivalik Rasayan Limited",
     "market": 96795.301015
    },
    {
     "number": 962,
     "ticker": "GMRP&UI",
     "name": "GMR Power and Urban Infra Limited",
     "market": 96273.327216
    },
    {
     "number": 963,
     "ticker": "PENIND",
     "name": "Pennar Industries Limited",
     "market": 95474.4584325
    },
    {
     "number": 964,
     "ticker": "GEOJITFSL",
     "name": "Geojit Financial Services Limited",
     "market": 95397.98809799999
    },
    {
     "number": 965,
     "ticker": "BCLIND",
     "name": "Bcl Industries Limited",
     "market": 95078.55
    },
    {
     "number": 966,
     "ticker": "DBOL",
     "name": "Dhampur Bio Organics Limited",
     "market": 95033.835085
    },
    {
     "number": 967,
     "ticker": "SHAILY",
     "name": "Shaily Engineering Plastics Limited",
     "market": 94340.294568
    },
    {
     "number": 968,
     "ticker": "LIKHITHA",
     "name": "Likhitha Infrastructure Limited",
     "market": 92904.75
    },
    {
     "number": 969,
     "ticker": "MADRASFERT",
     "name": "Madras Fertilizers Limited",
     "market": 92552.69685
    },
    {
     "number": 970,
     "ticker": "STEELCAS",
     "name": "Steelcast Limited",
     "market": 92375.36
    },
    {
     "number": 971,
     "ticker": "MKPL",
     "name": "M K Proteins Limited",
     "market": 91340.52
    },
    {
     "number": 972,
     "ticker": "ROSSELLIND",
     "name": "Rossell India Limited",
     "market": 91319.7106875
    },
    {
     "number": 973,
     "ticker": "KITEX",
     "name": "Kitex Garments Limited",
     "market": 91204.75
    },
    {
     "number": 974,
     "ticker": "PRAKASH",
     "name": "Prakash Industries Limited",
     "market": 91152.656051
    },
    {
     "number": 975,
     "ticker": "ARTEMISMED",
     "name": "Artemis Medicare Services Limited",
     "market": 91066.63125
    },
    {
     "number": 976,
     "ticker": "RICOAUTO",
     "name": "Rico Auto Industries Limited",
     "market": 90979.1625
    },
    {
     "number": 977,
     "ticker": "OMAXE",
     "name": "Omaxe Limited",
     "market": 90901.56838
    },
    {
     "number": 978,
     "ticker": "CENTUM",
     "name": "Centum Electronics Limited",
     "market": 90869.9180025
    },
    {
     "number": 979,
     "ticker": "ROTO",
     "name": "Roto Pumps Limited",
     "market": 90799.40051
    },
    {
     "number": 980,
     "ticker": "PRECAM",
     "name": "Precision Camshafts Limited",
     "market": 90426.51492
    },
    {
     "number": 981,
     "ticker": "BIGBLOC",
     "name": "Bigbloc Construction Limited",
     "market": 90396.116375
    },
    {
     "number": 982,
     "ticker": "SHREDIGCEM",
     "name": "Shree Digvijay Cement Co.Ltd",
     "market": 89444.91124799999
    },
    {
     "number": 983,
     "ticker": "CLSEL",
     "name": "Chaman Lal Setia Exports Limited",
     "market": 88826.50535
    },
    {
     "number": 984,
     "ticker": "GTLINFRA",
     "name": "GTL Infrastructure Limited",
     "market": 88697.71922200001
    },
    {
     "number": 985,
     "ticker": "PGIL",
     "name": "Pearl Global Industries Limited",
     "market": 88648.830204
    },
    {
     "number": 986,
     "ticker": "UTTAMSUGAR",
     "name": "Uttam Sugar Mills Limited",
     "market": 88213.47156
    },
    {
     "number": 987,
     "ticker": "AVADHSUGAR",
     "name": "Avadh Sugar & Energy Limited",
     "market": 87310.33883
    },
    {
     "number": 988,
     "ticker": "PITTIENG",
     "name": "Pitti Engineering Limited",
     "market": 86839.6565365
    },
    {
     "number": 989,
     "ticker": "5PAISA",
     "name": "5Paisa Capital Limited",
     "market": 86698.65744
    },
    {
     "number": 990,
     "ticker": "NAHARSPING",
     "name": "Nahar Spinning Mills Limited",
     "market": 86664.923109
    },
    {
     "number": 991,
     "ticker": "SPCENET",
     "name": "Spacenet Enterprises India Limited",
     "market": 86187.765401
    },
    {
     "number": 992,
     "ticker": "SPORTKING",
     "name": "Sportking India Limited",
     "market": 85928.3224
    },
    {
     "number": 993,
     "ticker": "DEEPINDS",
     "name": "Deep Industries Limited",
     "market": 85920
    },
    {
     "number": 994,
     "ticker": "PARAGMILK",
     "name": "Parag Milk Foods Limited",
     "market": 85390.9243275
    },
    {
     "number": 995,
     "ticker": "AGARIND",
     "name": "Agarwal Industrial Corporation Limited",
     "market": 85192.0872495
    },
    {
     "number": 996,
     "ticker": "CONTROLPR",
     "name": "Control Print Limited",
     "market": 85071.887808
    },
    {
     "number": 997,
     "ticker": "BAJAJHCARE",
     "name": "Bajaj Healthcare Limited",
     "market": 84685.6904
    },
    {
     "number": 998,
     "ticker": "KAMDHENU",
     "name": "Kamdhenu Limited",
     "market": 84348.51825
    },
    {
     "number": 999,
     "ticker": "CHEMCON",
     "name": "Chemcon Speciality Chemicals Limited",
     "market": 83811.043888
    },
    {
     "number": 1000,
     "ticker": "GICHSGFIN",
     "name": "GIC Housing Finance Limited",
     "market": 83388.375701
    },
    {
     "number": 1001,
     "ticker": "MEDICAMEQ",
     "name": "Medicamen Biotech Limited",
     "market": 83358.0979
    },
    {
     "number": 1002,
     "ticker": "DLINKINDIA",
     "name": "D-Link (India) Limited",
     "market": 82815.062625
    },
    {
     "number": 1003,
     "ticker": "ARIHANTSUP",
     "name": "Arihant Superstructures Limited",
     "market": 81537.942171
    },
    {
     "number": 1004,
     "ticker": "VHL",
     "name": "Vardhman Holdings Limited",
     "market": 81521.40384
    },
    {
     "number": 1005,
     "ticker": "PFS",
     "name": "PTC India Financial Services Limited",
     "market": 81248.8418775
    },
    {
     "number": 1006,
     "ticker": "HEXATRADEX",
     "name": "Hexa Tradex Limited",
     "market": 81126.847824
    },
    {
     "number": 1007,
     "ticker": "RILINFRA",
     "name": "Rachana Infrastructure Limited",
     "market": 80820.12
    },
    {
     "number": 1008,
     "ticker": "CAPACITE",
     "name": "Capacit'e Infraprojects Limited",
     "market": 80756.93568149999
    },
    {
     "number": 1009,
     "ticker": "SPAL",
     "name": "S. P. Apparels Limited",
     "market": 80747.9868
    },
    {
     "number": 1010,
     "ticker": "NCLIND",
     "name": "NCL Industries Limited",
     "market": 80672.680965
    },
    {
     "number": 1011,
     "ticker": "63MOONS",
     "name": "63 moons technologies limited",
     "market": 80522.2434075
    },
    {
     "number": 1012,
     "ticker": "NAVKARCORP",
     "name": "Navkar Corporation Limited",
     "market": 79624.64674899999
    },
    {
     "number": 1013,
     "ticker": "ORIENTPPR",
     "name": "Orient Paper & Industries Limited",
     "market": 79357.497428
    },
    {
     "number": 1014,
     "ticker": "DREDGECORP",
     "name": "Dredging Corporation of India Limited",
     "market": 79240
    },
    {
     "number": 1015,
     "ticker": "AMBIKCO",
     "name": "Ambika Cotton Mills Limited",
     "market": 78964.925
    },
    {
     "number": 1016,
     "ticker": "CENTRUM",
     "name": "Centrum Capital Limited",
     "market": 78630.18786
    },
    {
     "number": 1017,
     "ticker": "LINC",
     "name": "Linc Limited",
     "market": 78592.6217895
    },
    {
     "number": 1018,
     "ticker": "RGL",
     "name": "Renaissance Global Limited",
     "market": 78255.2788
    },
    {
     "number": 1019,
     "ticker": "SCHAND",
     "name": "S Chand And Company Limited",
     "market": 78187.691264
    },
    {
     "number": 1020,
     "ticker": "NELCAST",
     "name": "Nelcast Limited",
     "market": 77257.0656
    },
    {
     "number": 1021,
     "ticker": "FAZE3Q",
     "name": "Faze Three Limited",
     "market": 76933.1565
    },
    {
     "number": 1022,
     "ticker": "KICL",
     "name": "Kalyani Investment Company Limited",
     "market": 76471.430508
    },
    {
     "number": 1023,
     "ticker": "DVL",
     "name": "Dhunseri Ventures Limited",
     "market": 76371.47609699999
    },
    {
     "number": 1024,
     "ticker": "JAGSNPHARM",
     "name": "Jagsonpal Pharmaceuticals Limited",
     "market": 75921.804
    },
    {
     "number": 1025,
     "ticker": "POKARNA",
     "name": "Pokarna Limited",
     "market": 75820.282
    },
    {
     "number": 1026,
     "ticker": "IFGLEXPOR",
     "name": "IFGL Refractories Limited",
     "market": 75484.338984
    },
    {
     "number": 1027,
     "ticker": "TRIL",
     "name": "Transformers And Rectifiers (India) Limited",
     "market": 75428.97859
    },
    {
     "number": 1028,
     "ticker": "CENTENKA",
     "name": "Century Enka Limited",
     "market": 75209.727338
    },
    {
     "number": 1029,
     "ticker": "SMCGLOBAL",
     "name": "SMC Global Securities Limited",
     "market": 74912.85
    },
    {
     "number": 1030,
     "ticker": "ROHLTD",
     "name": "Royal Orchid Hotels Limited",
     "market": 74761.13609
    },
    {
     "number": 1031,
     "ticker": "INDNIPPON",
     "name": "India Nippon Electricals Limited",
     "market": 74741.184896
    },
    {
     "number": 1032,
     "ticker": "SHAKTIPUMP",
     "name": "Shakti Pumps (India) Limited",
     "market": 74329.350864
    },
    {
     "number": 1033,
     "ticker": "NGLFINE",
     "name": "NGL Fine-Chem Limited",
     "market": 74241.314408
    },
    {
     "number": 1034,
     "ticker": "IMPAL",
     "name": "India Motor Parts and Accessories Limited",
     "market": 74156.16
    },
    {
     "number": 1035,
     "ticker": "BLISSGVS",
     "name": "Bliss GVS Pharma Limited",
     "market": 74104.626128
    },
    {
     "number": 1036,
     "ticker": "ALLSEC",
     "name": "Allsec Technologies Limited",
     "market": 74065.883523
    },
    {
     "number": 1037,
     "ticker": "ORIENTBELL",
     "name": "Orient Bell Limited",
     "market": 73159.7338
    },
    {
     "number": 1038,
     "ticker": "MANGLMCEM",
     "name": "Mangalam Cement Limited",
     "market": 72977.828892
    },
    {
     "number": 1039,
     "ticker": "SANDESH",
     "name": "The Sandesh Limited",
     "market": 72764.844073
    },
    {
     "number": 1040,
     "ticker": "BODALCHEM",
     "name": "Bodal Chemicals Limited",
     "market": 72484.739305
    },
    {
     "number": 1041,
     "ticker": "ESTER",
     "name": "Ester Industries Limited",
     "market": 72469.176571
    },
    {
     "number": 1042,
     "ticker": "ZOTA",
     "name": "Zota Health Care LImited",
     "market": 70889.2213225
    },
    {
     "number": 1043,
     "ticker": "RSWM",
     "name": "RSWM Limited",
     "market": 70793.831052
    },
    {
     "number": 1044,
     "ticker": "INDRAMEDCO",
     "name": "Indraprastha Medical Corporation Limited",
     "market": 70634.0465
    },
    {
     "number": 1045,
     "ticker": "QUICKHEAL",
     "name": "Quick Heal Technologies Limited",
     "market": 70561.6849045
    },
    {
     "number": 1046,
     "ticker": "SRHHYPOLTD",
     "name": "Sree Rayalaseema Hi-Strength Hypo Limited",
     "market": 70375.7661
    },
    {
     "number": 1047,
     "ticker": "AURIONPRO",
     "name": "Aurionpro Solutions Limited",
     "market": 70235.9082825
    },
    {
     "number": 1048,
     "ticker": "GSLSU",
     "name": "Global Surfaces Limited",
     "market": 70205.481517
    },
    {
     "number": 1049,
     "ticker": "SASTASUNDR",
     "name": "Sastasundar Ventures Limited",
     "market": 70158.05775
    },
    {
     "number": 1050,
     "ticker": "MANAKSIA",
     "name": "Manaksia Limited",
     "market": 70055.89945
    },
    {
     "number": 1051,
     "ticker": "AWHCL",
     "name": "Antony Waste Handling Cell Limited",
     "market": 70053.176505
    },
    {
     "number": 1052,
     "ticker": "BLKASHYAP",
     "name": "B. L. Kashyap and Sons Limited",
     "market": 69886.4
    },
    {
     "number": 1053,
     "ticker": "RAMRAT",
     "name": "Ram Ratna Wires Limited",
     "market": 69564
    },
    {
     "number": 1054,
     "ticker": "JINDRILL",
     "name": "Jindal Drilling And Industries Limited",
     "market": 69525.668496
    },
    {
     "number": 1055,
     "ticker": "VIMTALABS",
     "name": "Vimta Labs Limited",
     "market": 69451.83197649999
    },
    {
     "number": 1056,
     "ticker": "CLOUD",
     "name": "Varanium Cloud Limited",
     "market": 69053.35158
    },
    {
     "number": 1057,
     "ticker": "DPABHUSHAN",
     "name": "D. P. Abhushan Limited",
     "market": 68956.652725
    },
    {
     "number": 1058,
     "ticker": "MOLDTECH",
     "name": "Mold-Tek Technologies Limited",
     "market": 68940.096283
    },
    {
     "number": 1059,
     "ticker": "ATULAUTO",
     "name": "Atul Auto Limited",
     "market": 68769.9888
    },
    {
     "number": 1060,
     "ticker": "KOKUYOCMLN",
     "name": "Kokuyo Camlin Limited",
     "market": 68657.95520699999
    },
    {
     "number": 1061,
     "ticker": "SIGACHI",
     "name": "Sigachi Industries Limited",
     "market": 68632.63125
    },
    {
     "number": 1062,
     "ticker": "HIMATSEIDE",
     "name": "Himatsingka Seide Limited",
     "market": 68033.89756
    },
    {
     "number": 1063,
     "ticker": "LINCOLN",
     "name": "Lincoln Pharmaceuticals Limited",
     "market": 67950.85224
    },
    {
     "number": 1064,
     "ticker": "GREENPOWER",
     "name": "Orient Green Power Company Limited",
     "market": 67940.51991850001
    },
    {
     "number": 1065,
     "ticker": "EMAMIPAP",
     "name": "Emami Paper Mills Limited",
     "market": 67758.936
    },
    {
     "number": 1066,
     "ticker": "SATINDLTD",
     "name": "Sat Industries Limited",
     "market": 67455.2025
    },
    {
     "number": 1067,
     "ticker": "RAMCOSYS",
     "name": "Ramco Systems Limited",
     "market": 67302.627838
    },
    {
     "number": 1068,
     "ticker": "HPAL",
     "name": "HP Adhesives Limited",
     "market": 67013.431709
    },
    {
     "number": 1069,
     "ticker": "OCCL",
     "name": "Oriental Carbon & Chemicals Limited",
     "market": 66953.596584
    },
    {
     "number": 1070,
     "ticker": "FOCUS",
     "name": "Focus Lighting and Fixtures Limited",
     "market": 66946.5300525
    },
    {
     "number": 1071,
     "ticker": "GEPIL",
     "name": "GE Power India Limited",
     "market": 66689.651232
    },
    {
     "number": 1072,
     "ticker": "SUTLEJTEX",
     "name": "Sutlej Textiles and Industries Limited",
     "market": 66432.50541
    },
    {
     "number": 1073,
     "ticker": "PANACEABIO",
     "name": "Panacea Biotec Limited",
     "market": 66426.434037
    },
    {
     "number": 1074,
     "ticker": "JAIBALAJI",
     "name": "Jai Balaji Industries Limited",
     "market": 66253.106323
    },
    {
     "number": 1075,
     "ticker": "RML",
     "name": "Rane (Madras) Limited",
     "market": 66118.310355
    },
    {
     "number": 1076,
     "ticker": "JETAIRWAYS",
     "name": "Jet Airways (India) Limited",
     "market": 65432.092608
    },
    {
     "number": 1077,
     "ticker": "TRACXN",
     "name": "Tracxn Technologies Limited",
     "market": 65301.930435
    },
    {
     "number": 1078,
     "ticker": "KHAICHEM",
     "name": "Khaitan Chemicals & Fertilizers Limited",
     "market": 65031.2586
    },
    {
     "number": 1079,
     "ticker": "TNPETRO",
     "name": "Tamilnadu PetroProducts Limited",
     "market": 64329.60391
    },
    {
     "number": 1080,
     "ticker": "ONWARDTEC",
     "name": "Onward Technologies Limited",
     "market": 64317.246045
    },
    {
     "number": 1081,
     "ticker": "TFCILTD",
     "name": "Tourism Finance Corporation of India Limited",
     "market": 64119.251856
    },
    {
     "number": 1082,
     "ticker": "ONMOBILE",
     "name": "OnMobile Global Limited",
     "market": 63972.548864
    },
    {
     "number": 1083,
     "ticker": "INNOVANA",
     "name": "Innovana Thinklabs Limited",
     "market": 63755
    },
    {
     "number": 1084,
     "ticker": "GANDHITUBE",
     "name": "Gandhi Special Tubes Limited",
     "market": 63217.247396000006
    },
    {
     "number": 1085,
     "ticker": "TEXINFRA",
     "name": "Texmaco Infrastructure & Holdings Limited",
     "market": 62821.30887
    },
    {
     "number": 1086,
     "ticker": "MEDICO",
     "name": "Medico Remedies Limited",
     "market": 62279.492
    },
    {
     "number": 1087,
     "ticker": "TVSELECT",
     "name": "TVS Electronics Limited",
     "market": 61900.405441999996
    },
    {
     "number": 1088,
     "ticker": "HEUBACHIND",
     "name": "Heubach Colorants India Limited",
     "market": 61397.58268
    },
    {
     "number": 1089,
     "ticker": "VINYLINDIA",
     "name": "Vinyl Chemicals (India) Limited",
     "market": 61145.096629499996
    },
    {
     "number": 1090,
     "ticker": "PARACABLES",
     "name": "Paramount Communications Limited",
     "market": 60391.213115
    },
    {
     "number": 1091,
     "ticker": "FOODSIN",
     "name": "Foods & Inns Limited",
     "market": 60361.8381
    },
    {
     "number": 1092,
     "ticker": "HLVLTD",
     "name": "HLV LIMITED",
     "market": 60322.280758500005
    },
    {
     "number": 1093,
     "ticker": "COFFEEDAY",
     "name": "Coffee Day Enterprises Limited",
     "market": 60312.365774499995
    },
    {
     "number": 1094,
     "ticker": "BETA",
     "name": "Beta Drugs Limited",
     "market": 60273.656405
    },
    {
     "number": 1095,
     "ticker": "APEX",
     "name": "Apex Frozen Foods Limited",
     "market": 60218.75
    },
    {
     "number": 1096,
     "ticker": "YUKEN",
     "name": "Yuken India Limited",
     "market": 60210
    },
    {
     "number": 1097,
     "ticker": "ELIN",
     "name": "Elin Electronics Limited",
     "market": 59864.18971
    },
    {
     "number": 1098,
     "ticker": "MONARCH",
     "name": "Monarch Networth Capital Limited",
     "market": 59785.84690899999
    },
    {
     "number": 1099,
     "ticker": "DMCC",
     "name": "DMCC SPECIALITY CHEMICALS LIMITED",
     "market": 59581.499937
    },
    {
     "number": 1100,
     "ticker": "CHEVIOT",
     "name": "Cheviot Company Limited",
     "market": 59374.5225
    },
    {
     "number": 1101,
     "ticker": "XCHANGING",
     "name": "Xchanging Solutions Limited",
     "market": 59266.776912
    },
    {
     "number": 1102,
     "ticker": "VISAKAIND",
     "name": "Visaka Industries Limited",
     "market": 59083.574888
    },
    {
     "number": 1103,
     "ticker": "SUMMITSEC",
     "name": "Summit Securities Limited",
     "market": 59038.5950055
    },
    {
     "number": 1104,
     "ticker": "SUKHJITS",
     "name": "Sukhjit Starch & Chemicals Limited",
     "market": 58816.83
    },
    {
     "number": 1105,
     "ticker": "INDIANHUME",
     "name": "Indian Hume Pipe Company Limited",
     "market": 58790.640795
    },
    {
     "number": 1106,
     "ticker": "JUBLINDS",
     "name": "Jubilant Industries Limited",
     "market": 58467.8854305
    },
    {
     "number": 1107,
     "ticker": "ASALCBR",
     "name": "Associated Alcohols & Breweries Ltd.",
     "market": 58341.5784
    },
    {
     "number": 1108,
     "ticker": "DECCANCE",
     "name": "Deccan Cements Limited",
     "market": 58257.1925
    },
    {
     "number": 1109,
     "ticker": "JAYBARMARU",
     "name": "Jay Bharat Maruti Limited",
     "market": 57567.35
    },
    {
     "number": 1110,
     "ticker": "COOLCAPS",
     "name": "Cool Caps Industries Limited",
     "market": 57522.56
    },
    {
     "number": 1111,
     "ticker": "APOLLO",
     "name": "Apollo Micro Systems Limited",
     "market": 57495.200333999994
    },
    {
     "number": 1112,
     "ticker": "ELDEHSG",
     "name": "Eldeco Housing And Industries Limited",
     "market": 57419.8035
    },
    {
     "number": 1113,
     "ticker": "HERCULES",
     "name": "Hercules Hoists Limited",
     "market": 57088
    },
    {
     "number": 1114,
     "ticker": "4THDIM",
     "name": "Fourth Dimension Solutions Limited",
     "market": 56920.125705
    },
    {
     "number": 1115,
     "ticker": "KRITI",
     "name": "Kriti Industries (India) Limited",
     "market": 56424.004
    },
    {
     "number": 1116,
     "ticker": "AGSTRA",
     "name": "AGS Transact Technologies Limited",
     "market": 56331.027264
    },
    {
     "number": 1117,
     "ticker": "NAHARPOLY",
     "name": "Nahar Poly Films Limited",
     "market": 56208.147426
    },
    {
     "number": 1118,
     "ticker": "MANINDS",
     "name": "Man Industries (India) Limited",
     "market": 55955.944205
    },
    {
     "number": 1119,
     "ticker": "ENIL",
     "name": "Entertainment Network (India) Limited",
     "market": 55679.04472
    },
    {
     "number": 1120,
     "ticker": "SYNCOMF",
     "name": "Syncom Formulations (India) Limited",
     "market": 55460
    },
    {
     "number": 1121,
     "ticker": "KAMOPAINTS",
     "name": "Kamdhenu Ventures Limited",
     "market": 55217.775
    },
    {
     "number": 1122,
     "ticker": "NAGAFERT",
     "name": "Nagarjuna Fertilizers and Chemicals Limited",
     "market": 55021.980276
    },
    {
     "number": 1123,
     "ticker": "SCPL",
     "name": "Sheetal Cool Products Limited",
     "market": 54993.75
    },
    {
     "number": 1124,
     "ticker": "HPL",
     "name": "HPL Electric & Power Limited",
     "market": 54494.661885
    },
    {
     "number": 1125,
     "ticker": "INDOAMIN",
     "name": "Indo Amines Limited",
     "market": 54401.77242
    },
    {
     "number": 1126,
     "ticker": "DCMSRIND",
     "name": "DCM Shriram Industries Limited",
     "market": 54109.13907
    },
    {
     "number": 1127,
     "ticker": "MENONBE",
     "name": "Menon Bearings Limited",
     "market": 54050.58
    },
    {
     "number": 1128,
     "ticker": "VASCONEQ",
     "name": "Vascon Engineers Limited",
     "market": 54003.302083500006
    },
    {
     "number": 1129,
     "ticker": "VLSFINANCE",
     "name": "VLS Finance Limited",
     "market": 53914.933253999996
    },
    {
     "number": 1130,
     "ticker": "BALAXI",
     "name": "BALAXI PHARMACEUTICALS LIMITED",
     "market": 53870.30125
    },
    {
     "number": 1131,
     "ticker": "ZEEMEDIA",
     "name": "Zee Media Corporation Limited",
     "market": 53786.86648
    },
    {
     "number": 1132,
     "ticker": "CREATIVE",
     "name": "Creative Newtech Limited",
     "market": 53676
    },
    {
     "number": 1133,
     "ticker": "KRISHIVAL",
     "name": "Empyrean Cashews Limited",
     "market": 53615.1393985
    },
    {
     "number": 1134,
     "ticker": "SNOWMAN",
     "name": "Snowman Logistics Limited",
     "market": 53468.1584
    },
    {
     "number": 1135,
     "ticker": "KOPRAN",
     "name": "Kopran Limited",
     "market": 53274.924105
    },
    {
     "number": 1136,
     "ticker": "SHREYAS",
     "name": "Shreyas Shipping & Logistics Limited",
     "market": 52555.3552355
    },
    {
     "number": 1137,
     "ticker": "REFEX",
     "name": "Refex Industries Limited",
     "market": 52548.396048
    },
    {
     "number": 1138,
     "ticker": "KSOLVES",
     "name": "Ksolves India Limited",
     "market": 52433.16
    },
    {
     "number": 1139,
     "ticker": "GFLLIMITED",
     "name": "GFL Limited",
     "market": 52288.6
    },
    {
     "number": 1140,
     "ticker": "SPECTRUM",
     "name": "Spectrum Electrical Industries Limited",
     "market": 52163.448
    },
    {
     "number": 1141,
     "ticker": "RUSHIL",
     "name": "Rushil Decor Limited",
     "market": 52114.591298
    },
    {
     "number": 1142,
     "ticker": "IRISDOREME",
     "name": "Iris Clothings Limited",
     "market": 51764.721798
    },
    {
     "number": 1143,
     "ticker": "BINDALAGRO",
     "name": "Oswal Chemicals & Fertilizers Limited",
     "market": 51361.8318
    },
    {
     "number": 1144,
     "ticker": "SELMC",
     "name": "SEL Manufacturing Company Limited",
     "market": 51275.94825
    },
    {
     "number": 1145,
     "ticker": "BHAGERIA",
     "name": "Bhageria Industries Limited",
     "market": 51063.6906
    },
    {
     "number": 1146,
     "ticker": "ZUARI",
     "name": "Zuari Agro Chemicals Limited",
     "market": 50974.303272
    },
    {
     "number": 1147,
     "ticker": "TALBROAUTO",
     "name": "Talbros Automotive Components Limited",
     "market": 50512.145145
    },
    {
     "number": 1148,
     "ticker": "RUBYMILLS",
     "name": "The Ruby Mills Limited",
     "market": 50511.12
    },
    {
     "number": 1149,
     "ticker": "OSWALSEEDS",
     "name": "ShreeOswal Seeds And Chemicals Limited",
     "market": 49508.1375
    },
    {
     "number": 1150,
     "ticker": "DPWIRES",
     "name": "D P Wires Limited",
     "market": 49312.896
    },
    {
     "number": 1151,
     "ticker": "SMSPHARMA",
     "name": "SMS Pharmaceuticals Limited",
     "market": 49309.807475
    },
    {
     "number": 1152,
     "ticker": "DHARMAJ",
     "name": "Dharmaj Crop Guard Limited",
     "market": 48938.484608
    },
    {
     "number": 1153,
     "ticker": "RBL",
     "name": "Rane Brake Lining Limited",
     "market": 48744.566526
    },
    {
     "number": 1154,
     "ticker": "GOYALALUM",
     "name": "Goyal Aluminiums Limited",
     "market": 48700.424536000006
    },
    {
     "number": 1155,
     "ticker": "NRL",
     "name": "Nupur Recyclers Limited",
     "market": 48208.151571999995
    },
    {
     "number": 1156,
     "ticker": "MIRZAINT",
     "name": "Mirza International Limited",
     "market": 48163.36215
    },
    {
     "number": 1157,
     "ticker": "VIKASLIFE",
     "name": "Vikas Lifecare Limited",
     "market": 48104.869777
    },
    {
     "number": 1158,
     "ticker": "WINDLAS",
     "name": "Windlas Biotech Limited",
     "market": 47558.721192
    },
    {
     "number": 1159,
     "ticker": "HITECHGEAR",
     "name": "The Hi-Tech Gears Limited",
     "market": 47407.968
    },
    {
     "number": 1160,
     "ticker": "SHREEPUSHK",
     "name": "Shree Pushkar Chemicals & Fertilisers Limited",
     "market": 46869.55416
    },
    {
     "number": 1161,
     "ticker": "SPENCERS",
     "name": "Spencer's Retail Limited",
     "market": 46691.892702
    },
    {
     "number": 1162,
     "ticker": "KANORICHEM",
     "name": "Kanoria Chemicals & Industries Limited",
     "market": 46555.2463115
    },
    {
     "number": 1163,
     "ticker": "JPOLYINVST",
     "name": "Jindal Poly Investment and Finance Company Limited",
     "market": 46504.773896000006
    },
    {
     "number": 1164,
     "ticker": "ASAL",
     "name": "Automotive Stampings and Assemblies Limited",
     "market": 46498.547607
    },
    {
     "number": 1165,
     "ticker": "SILVERTUC",
     "name": "Silver Touch Technologies Limited",
     "market": 46342.7145
    },
    {
     "number": 1166,
     "ticker": "3IINFOLTD",
     "name": "3i Infotech Limited",
     "market": 46243.928529
    },
    {
     "number": 1167,
     "ticker": "MALLCOM",
     "name": "Mallcom (India) Limited",
     "market": 45795.36
    },
    {
     "number": 1168,
     "ticker": "CREST",
     "name": "Crest Ventures Limited",
     "market": 45377.75
    },
    {
     "number": 1169,
     "ticker": "REPRO",
     "name": "Repro India Limited",
     "market": 45369.986140500005
    },
    {
     "number": 1170,
     "ticker": "MARINE",
     "name": "Marine Electricals (India) Limited",
     "market": 45284.017125
    },
    {
     "number": 1171,
     "ticker": "KECL",
     "name": "Kirloskar Electric Company Limited",
     "market": 45261.189386499995
    },
    {
     "number": 1172,
     "ticker": "DENORA",
     "name": "De Nora India Limited",
     "market": 45210.981461
    },
    {
     "number": 1173,
     "ticker": "EXXARO",
     "name": "Exxaro Tiles Limited",
     "market": 45121.369095
    },
    {
     "number": 1174,
     "ticker": "MAGADSUGAR",
     "name": "Magadh Sugar & Energy Limited",
     "market": 44980.48296
    },
    {
     "number": 1175,
     "ticker": "ASIANTILES",
     "name": "Asian Granito India Limited",
     "market": 44424.233258
    },
    {
     "number": 1176,
     "ticker": "JAYAGROGN",
     "name": "Jayant Agro Organics Limited",
     "market": 44025
    },
    {
     "number": 1177,
     "ticker": "DIGISPICE",
     "name": "DiGiSPICE Technologies Limited",
     "market": 43992.86714
    },
    {
     "number": 1178,
     "ticker": "BBTCL",
     "name": "B&B Triplewall Containers Limited",
     "market": 43935.07608
    },
    {
     "number": 1179,
     "ticker": "PREMEXPLN",
     "name": "Premier Explosives Limited",
     "market": 43476.6783965
    },
    {
     "number": 1180,
     "ticker": "SWELECTES",
     "name": "Swelect Energy Systems Limited",
     "market": 43240.3629
    },
    {
     "number": 1181,
     "ticker": "KELLTONTEC",
     "name": "Kellton Tech Solutions Limited",
     "market": 42521.8169595
    },
    {
     "number": 1182,
     "ticker": "MUTHOOTCAP",
     "name": "Muthoot Capital Services Limited",
     "market": 42335.949942
    },
    {
     "number": 1183,
     "ticker": "APCL",
     "name": "Anjani Portland Cement Limited",
     "market": 42182.161104
    },
    {
     "number": 1184,
     "ticker": "ASIANENE",
     "name": "Asian Energy Services Limited",
     "market": 42053.223398
    },
    {
     "number": 1185,
     "ticker": "DONEAR",
     "name": "Donear Industries Limited",
     "market": 41912
    },
    {
     "number": 1186,
     "ticker": "ADSL",
     "name": "Allied Digital Services Limited",
     "market": 41615.991252
    },
    {
     "number": 1187,
     "ticker": "BANSWRAS",
     "name": "Banswara Syntex Limited",
     "market": 41472.169766
    },
    {
     "number": 1188,
     "ticker": "NAHARCAP",
     "name": "Nahar Capital and Financial Services Limited",
     "market": 41471.8825755
    },
    {
     "number": 1189,
     "ticker": "ICEMAKE",
     "name": "Ice Make Refrigeration Limited",
     "market": 41374.46517
    },
    {
     "number": 1190,
     "ticker": "BAIDFIN",
     "name": "Baid Finserv Limited",
     "market": 41063.3586
    },
    {
     "number": 1191,
     "ticker": "STCINDIA",
     "name": "The State Trading Corporation of India Limited",
     "market": 41040
    },
    {
     "number": 1192,
     "ticker": "TBZ",
     "name": "Tribhovandas Bhimji Zaveri Limited",
     "market": 40772.40882
    },
    {
     "number": 1193,
     "ticker": "SALZERELEC",
     "name": "Salzer Electronics Limited",
     "market": 40588.1606115
    },
    {
     "number": 1194,
     "ticker": "IFBAGRO",
     "name": "IFB Agro Industries Limited",
     "market": 40334.779966
    },
    {
     "number": 1195,
     "ticker": "PTL",
     "name": "PTL Enterprises Limited",
     "market": 40308.7965
    },
    {
     "number": 1196,
     "ticker": "ARIHANTCAP",
     "name": "Arihant Capital Markets Limited",
     "market": 40239.5972
    },
    {
     "number": 1197,
     "ticker": "CSLFINANCE",
     "name": "CSL Finance Limited",
     "market": 40159.086877
    },
    {
     "number": 1198,
     "ticker": "JSLL",
     "name": "Jeena Sikho Lifecare Limited",
     "market": 40011.023224000004
    },
    {
     "number": 1199,
     "ticker": "UNIVPHOTO",
     "name": "Universus Photo Imagings Limited",
     "market": 39862.058466
    },
    {
     "number": 1200,
     "ticker": "HARDWYN",
     "name": "Hardwyn India Limited",
     "market": 39856.5
    },
    {
     "number": 1201,
     "ticker": "DSSL",
     "name": "Dynacons Systems & Solutions Limited",
     "market": 39735.68694
    },
    {
     "number": 1202,
     "ticker": "REVATHI",
     "name": "Revathi Equipment Limited",
     "market": 39351.945633
    },
    {
     "number": 1203,
     "ticker": "HCL-INSYS",
     "name": "HCL Infosystems Limited",
     "market": 39340.586396
    },
    {
     "number": 1204,
     "ticker": "PLASTIBLEN",
     "name": "Plastiblends India Limited",
     "market": 39243.692
    },
    {
     "number": 1205,
     "ticker": "UNIDT",
     "name": "United Drilling Tools Limited",
     "market": 39083.51755
    },
    {
     "number": 1206,
     "ticker": "CAREERP",
     "name": "Career Point Limited",
     "market": 39032.9506245
    },
    {
     "number": 1207,
     "ticker": "ARROWGREEN",
     "name": "Arrow Greentech Limited",
     "market": 39009.863699
    },
    {
     "number": 1208,
     "ticker": "SREEL",
     "name": "Sreeleathers Limited",
     "market": 38923.575172
    },
    {
     "number": 1209,
     "ticker": "SBC",
     "name": "SBC Exports Limited",
     "market": 38835.94
    },
    {
     "number": 1210,
     "ticker": "RADIOCITY",
     "name": "Music Broadcast Limited",
     "market": 38302.763976
    },
    {
     "number": 1211,
     "ticker": "SERVOTECH",
     "name": "Servotech Power Systems Limited",
     "market": 38277.7722
    },
    {
     "number": 1212,
     "ticker": "SAKAR",
     "name": "Sakar Healthcare Limited",
     "market": 38194.24
    },
    {
     "number": 1213,
     "ticker": "BALAJITELE",
     "name": "Balaji Telefilms Limited",
     "market": 37519.394353
    },
    {
     "number": 1214,
     "ticker": "NXTDIGITAL",
     "name": "NXTDIGITAL LIMITED",
     "market": 37493.3499835
    },
    {
     "number": 1215,
     "ticker": "GOACARBON",
     "name": "Goa Carbon Limited",
     "market": 37427.80268
    },
    {
     "number": 1216,
     "ticker": "BIRLACABLE",
     "name": "Birla Cable Limited",
     "market": 37380
    },
    {
     "number": 1217,
     "ticker": "RITCO",
     "name": "Ritco Logistics Limited",
     "market": 37082.07627
    },
    {
     "number": 1218,
     "ticker": "SELAN",
     "name": "Selan Exploration Technology Limited",
     "market": 36996.8
    },
    {
     "number": 1219,
     "ticker": "ASCOM",
     "name": "Ascom Leasing & Investments Limited",
     "market": 36899.667
    },
    {
     "number": 1220,
     "ticker": "OSIAHYPER",
     "name": "Osia Hyper Retail Limited",
     "market": 36660.54645
    },
    {
     "number": 1221,
     "ticker": "HINDCOMPOS",
     "name": "Hindustan Composites Limited",
     "market": 36597.582
    },
    {
     "number": 1222,
     "ticker": "DHANBANK",
     "name": "Dhanlaxmi Bank Limited",
     "market": 36560.246138
    },
    {
     "number": 1223,
     "ticker": "DYCL",
     "name": "Dynamic Cables Limited",
     "market": 36554.247
    },
    {
     "number": 1224,
     "ticker": "DHUNINV",
     "name": "Dhunseri Investments Limited",
     "market": 36546.484932
    },
    {
     "number": 1225,
     "ticker": "EIFFL",
     "name": "Euro India Fresh Foods Limited",
     "market": 36381.6
    },
    {
     "number": 1226,
     "ticker": "MUNJALAU",
     "name": "Munjal Auto Industries Limited",
     "market": 36300
    },
    {
     "number": 1227,
     "ticker": "NAHARINDUS",
     "name": "Nahar Industrial Enterprises Limited",
     "market": 36050.802605
    },
    {
     "number": 1228,
     "ticker": "DELPHIFX",
     "name": "DELPHI WORLD MONEY LIMITED",
     "market": 36037.671765
    },
    {
     "number": 1229,
     "ticker": "URJA",
     "name": "Urja Global Limited",
     "market": 35993.5563245
    },
    {
     "number": 1230,
     "ticker": "PRIMESECU",
     "name": "Prime Securities Limited",
     "market": 35851.8053
    },
    {
     "number": 1231,
     "ticker": "NECLIFE",
     "name": "Nectar Lifesciences Limited",
     "market": 35769.624715
    },
    {
     "number": 1232,
     "ticker": "NBIFIN",
     "name": "N. B. I. Industrial Finance Company Limited",
     "market": 35680.193538
    },
    {
     "number": 1233,
     "ticker": "GRPLTD",
     "name": "GRP Limited",
     "market": 35599.9911
    },
    {
     "number": 1234,
     "ticker": "MAWANASUG",
     "name": "Mawana Sugars Limited",
     "market": 35244.294464
    },
    {
     "number": 1235,
     "ticker": "ZIMLAB",
     "name": "Zim Laboratories Limited",
     "market": 35204.400615
    },
    {
     "number": 1236,
     "ticker": "PDMJEPAPER",
     "name": "Pudumjee Paper Products Limited",
     "market": 35084.025
    },
    {
     "number": 1237,
     "ticker": "ONEPOINT",
     "name": "One Point One Solutions Limited",
     "market": 35073.3065625
    },
    {
     "number": 1238,
     "ticker": "MAXIND",
     "name": "Max India Limited",
     "market": 35047.1278305
    },
    {
     "number": 1239,
     "ticker": "SHYAMCENT",
     "name": "Shyam Century Ferrous Limited",
     "market": 35008.54335
    },
    {
     "number": 1240,
     "ticker": "VARDHACRLC",
     "name": "Vardhman Acrylics Limited",
     "market": 34958.22951
    },
    {
     "number": 1241,
     "ticker": "RADHIKAJWE",
     "name": "Radhika Jeweltech Limited",
     "market": 34939.8
    },
    {
     "number": 1242,
     "ticker": "NPST",
     "name": "Network People Services Technologies Limited",
     "market": 34936.803
    },
    {
     "number": 1243,
     "ticker": "THEINVEST",
     "name": "The Investment Trust Of India Limited",
     "market": 34923.922064499995
    },
    {
     "number": 1244,
     "ticker": "HTMEDIA",
     "name": "HT Media Limited",
     "market": 34795.872943
    },
    {
     "number": 1245,
     "ticker": "NRAIL",
     "name": "N R Agarwal Industries Limited",
     "market": 34701.9449
    },
    {
     "number": 1246,
     "ticker": "RCOM",
     "name": "Reliance Communications Limited",
     "market": 34569.163125
    },
    {
     "number": 1247,
     "ticker": "DICIND",
     "name": "DIC India Limited",
     "market": 34535.9009625
    },
    {
     "number": 1248,
     "ticker": "OSWALAGRO",
     "name": "Oswal Agro Mills Limited",
     "market": 34498.337432
    },
    {
     "number": 1249,
     "ticker": "POCL",
     "name": "Pondy Oxides & Chemicals Limited",
     "market": 34479.09748
    },
    {
     "number": 1250,
     "ticker": "AARTISURF",
     "name": "Aarti Surfactants Limited",
     "market": 34410.772149000004
    },
    {
     "number": 1251,
     "ticker": "SKMEGGPROD",
     "name": "SKM Egg Products Export (India) Limited",
     "market": 34400.145
    },
    {
     "number": 1252,
     "ticker": "SOLEX",
     "name": "Solex Energy Limited",
     "market": 34360
    },
    {
     "number": 1253,
     "ticker": "DEEPENR",
     "name": "DEEP ENERGY RESOURCES LIMITED",
     "market": 34336
    },
    {
     "number": 1254,
     "ticker": "FCSSOFT",
     "name": "FCS Software Solutions Limited",
     "market": 34191.062
    },
    {
     "number": 1255,
     "ticker": "MUNJALSHOW",
     "name": "Munjal Showa Limited",
     "market": 34075.74
    },
    {
     "number": 1256,
     "ticker": "KOTHARIPRO",
     "name": "Kothari Products Limited",
     "market": 34051.849965
    },
    {
     "number": 1257,
     "ticker": "PONNIERODE",
     "name": "Ponni Sugars (Erode) Limited",
     "market": 34032.538444
    },
    {
     "number": 1258,
     "ticker": "CHEMBOND",
     "name": "Chembond Chemicals Ltd",
     "market": 34017.444496
    },
    {
     "number": 1259,
     "ticker": "USASEEDS",
     "name": "Upsurge Seeds Of Agriculture Limited",
     "market": 33992.937
    },
    {
     "number": 1260,
     "ticker": "KERNEX",
     "name": "Kernex Microsystems (India) Limited",
     "market": 33878.153025
    },
    {
     "number": 1261,
     "ticker": "RANASUG",
     "name": "Rana Sugars Limited",
     "market": 33784.9204
    },
    {
     "number": 1262,
     "ticker": "CUPID",
     "name": "Cupid Limited",
     "market": 33751.809
    },
    {
     "number": 1263,
     "ticker": "BGRENERGY",
     "name": "BGR Energy Systems Limited",
     "market": 33699.44852
    },
    {
     "number": 1264,
     "ticker": "GENUSPAPER",
     "name": "Genus Paper & Boards Limited",
     "market": 33554.93517
    },
    {
     "number": 1265,
     "ticker": "GSS",
     "name": "GSS Infotech Limited",
     "market": 33551.885983
    },
    {
     "number": 1266,
     "ticker": "PENINLAND",
     "name": "Peninsula Land Limited",
     "market": 33364.54579
    },
    {
     "number": 1267,
     "ticker": "JYOTISTRUC",
     "name": "Jyoti Structures Limited",
     "market": 33312.704775
    },
    {
     "number": 1268,
     "ticker": "ADVANIHOTR",
     "name": "Advani Hotels & Resorts (India) Limited",
     "market": 33300.969625
    },
    {
     "number": 1269,
     "ticker": "KAYA",
     "name": "Kaya Limited",
     "market": 33221.983413
    },
    {
     "number": 1270,
     "ticker": "KOTHARIPET",
     "name": "Kothari Petrochemicals Limited",
     "market": 33218.7928
    },
    {
     "number": 1271,
     "ticker": "LIBERTSHOE",
     "name": "Liberty Shoes Limited",
     "market": 33168.36
    },
    {
     "number": 1272,
     "ticker": "KHADIM",
     "name": "Khadim India Limited",
     "market": 33144.953023
    },
    {
     "number": 1273,
     "ticker": "PPL",
     "name": "Prakash Pipes Limited",
     "market": 33138.879467
    },
    {
     "number": 1274,
     "ticker": "VIPCLOTHNG",
     "name": "VIP Clothing Limited",
     "market": 33121.204119
    },
    {
     "number": 1275,
     "ticker": "NDRAUTO",
     "name": "Ndr Auto Components Limited",
     "market": 32996.162974
    },
    {
     "number": 1276,
     "ticker": "PROZONINTU",
     "name": "Prozone Intu Properties Limited",
     "market": 32733.318403499998
    },
    {
     "number": 1277,
     "ticker": "INDOBORAX",
     "name": "Indo Borax & Chemicals Limited",
     "market": 32715.755
    },
    {
     "number": 1278,
     "ticker": "CONSOFINVT",
     "name": "Consolidated Finvest & Holdings Limited",
     "market": 32681.956026
    },
    {
     "number": 1279,
     "ticker": "INDSWFTLAB",
     "name": "Ind-Swift Laboratories Limited",
     "market": 32615.94672
    },
    {
     "number": 1280,
     "ticker": "ZUARIIND",
     "name": "ZUARI INDUSTRIES LIMITED",
     "market": 32431.709376
    },
    {
     "number": 1281,
     "ticker": "GVKPIL",
     "name": "GVK Power & Infrastructure Limited",
     "market": 32361.721275
    },
    {
     "number": 1282,
     "ticker": "SBGLP",
     "name": "Suratwwala Business Group Limited",
     "market": 32099.383044000002
    },
    {
     "number": 1283,
     "ticker": "HIRECT",
     "name": "Hind Rectifiers Limited",
     "market": 32092.2133125
    },
    {
     "number": 1284,
     "ticker": "CHEMFAB",
     "name": "Chemfab Alkalis Limited",
     "market": 32086.779525
    },
    {
     "number": 1285,
     "ticker": "GLOBAL",
     "name": "Global Education Limited",
     "market": 31640.3724
    },
    {
     "number": 1286,
     "ticker": "ANNAPURNA",
     "name": "Annapurna Swadisht Limited",
     "market": 31604.139
    },
    {
     "number": 1287,
     "ticker": "INTLCONV",
     "name": "International Conveyors Limited",
     "market": 31463.9075
    },
    {
     "number": 1288,
     "ticker": "EMKAYTOOLS",
     "name": "Emkay Taps and Cutting Tools Limited",
     "market": 31373.622
    },
    {
     "number": 1289,
     "ticker": "ORBTEXP",
     "name": "Orbit Exports Limited",
     "market": 31371.811026
    },
    {
     "number": 1290,
     "ticker": "SOUTHWEST",
     "name": "South West Pinnacle Exploration Limited",
     "market": 31166.9808
    },
    {
     "number": 1291,
     "ticker": "KAMATHOTEL",
     "name": "Kamat Hotels (I) Limited",
     "market": 31013.03627
    },
    {
     "number": 1292,
     "ticker": "RAJMET",
     "name": "Rajnandini Metal Limited",
     "market": 30965.76
    },
    {
     "number": 1293,
     "ticker": "RAMAPHO",
     "name": "Rama Phosphates Limited",
     "market": 30910.043111
    },
    {
     "number": 1294,
     "ticker": "OMINFRAL",
     "name": "OM INFRA LIMITED",
     "market": 30865.3707845
    },
    {
     "number": 1295,
     "ticker": "HMVL",
     "name": "Hindustan Media Ventures Limited",
     "market": 30831.542838
    },
    {
     "number": 1296,
     "ticker": "AYMSYNTEX",
     "name": "AYM Syntex Limited",
     "market": 30715.51544
    },
    {
     "number": 1297,
     "ticker": "MSPL",
     "name": "MSP Steel & Power Limited",
     "market": 30447.785
    },
    {
     "number": 1298,
     "ticker": "WEALTH",
     "name": "Wealth First Portfolio Managers Limited",
     "market": 30334.785
    },
    {
     "number": 1299,
     "ticker": "UNITECH",
     "name": "Unitech Limited",
     "market": 30087.462040500002
    },
    {
     "number": 1300,
     "ticker": "WEBELSOLAR",
     "name": "Websol Energy System Limited",
     "market": 29971.005405
    },
    {
     "number": 1301,
     "ticker": "NURECA",
     "name": "Nureca Limited",
     "market": 29955.5242125
    },
    {
     "number": 1302,
     "ticker": "LYKALABS",
     "name": "Lyka Labs Limited",
     "market": 29938.015
    },
    {
     "number": 1303,
     "ticker": "GKWLIMITED",
     "name": "GKW Limited",
     "market": 29784.768
    },
    {
     "number": 1304,
     "ticker": "MHLXMIRU",
     "name": "Mahalaxmi Rubtech Limited",
     "market": 29710.2193125
    },
    {
     "number": 1305,
     "ticker": "AURUM",
     "name": "Aurum PropTech Limited",
     "market": 29574.468737
    },
    {
     "number": 1306,
     "ticker": "SKYGOLD",
     "name": "Sky Gold Limited",
     "market": 29271.70106
    },
    {
     "number": 1307,
     "ticker": "ALBERTDAVD",
     "name": "Albert David Limited",
     "market": 29252.058831
    },
    {
     "number": 1308,
     "ticker": "SHIVAUM",
     "name": "Shiv Aum Steels Limited",
     "market": 29240.86
    },
    {
     "number": 1309,
     "ticker": "PAVNAIND",
     "name": "Pavna Industries Limited",
     "market": 29203.468
    },
    {
     "number": 1310,
     "ticker": "CINELINE",
     "name": "Cineline India Limited",
     "market": 29167.385016
    },
    {
     "number": 1311,
     "ticker": "KOTARISUG",
     "name": "Kothari Sugars And Chemicals Limited",
     "market": 28928.11442
    },
    {
     "number": 1312,
     "ticker": "SHEMAROO",
     "name": "Shemaroo Entertainment Limited",
     "market": 28908.3111765
    },
    {
     "number": 1313,
     "ticker": "SILINV",
     "name": "SIL Investments Limited",
     "market": 28751.86611
    },
    {
     "number": 1314,
     "ticker": "SKP",
     "name": "SKP Bearing Industries Limited",
     "market": 28718
    },
    {
     "number": 1315,
     "ticker": "MMP",
     "name": "MMP Industries Limited",
     "market": 28603.342238
    },
    {
     "number": 1316,
     "ticker": "EQUIPPP",
     "name": "Equippp Social Impact Technologies Limited",
     "market": 28505.8297125
    },
    {
     "number": 1317,
     "ticker": "MANORG",
     "name": "Mangalam Organics Limited",
     "market": 28489.60966
    },
    {
     "number": 1318,
     "ticker": "CYBERTECH",
     "name": "Cybertech Systems And Software Limited",
     "market": 28359.200628000002
    },
    {
     "number": 1319,
     "ticker": "TRIGYN",
     "name": "Trigyn Technologies Limited",
     "market": 28292.091384
    },
    {
     "number": 1320,
     "ticker": "SINTERCOM",
     "name": "Sintercom India Limited",
     "market": 28160.961906
    },
    {
     "number": 1321,
     "ticker": "JINDALPHOT",
     "name": "Jindal Photo Limited",
     "market": 28005.22998
    },
    {
     "number": 1322,
     "ticker": "SARLAPOLY",
     "name": "Sarla Performance Fibers Limited",
     "market": 27890.002
    },
    {
     "number": 1323,
     "ticker": "RUCHIRA",
     "name": "Ruchira Papers Limited",
     "market": 27845.370071999998
    },
    {
     "number": 1324,
     "ticker": "ESSENTIA",
     "name": "Integra Essentia Limited",
     "market": 27650.4966815
    },
    {
     "number": 1325,
     "ticker": "MACPOWER",
     "name": "Macpower CNC Machines Limited",
     "market": 27591.47328
    },
    {
     "number": 1326,
     "ticker": "AUTOIND",
     "name": "Autoline Industries Limited",
     "market": 27527.475366
    },
    {
     "number": 1327,
     "ticker": "ORIENTABRA",
     "name": "Orient Abrasives Limited",
     "market": 27397.3768
    },
    {
     "number": 1328,
     "ticker": "APOLSINHOT",
     "name": "Apollo Sindoori Hotels Limited",
     "market": 27358.8084
    },
    {
     "number": 1329,
     "ticker": "DYNPRO",
     "name": "Dynemic Products Limited",
     "market": 27280.712032
    },
    {
     "number": 1330,
     "ticker": "CLEDUCATE",
     "name": "CL Educate Limited",
     "market": 27258.81444
    },
    {
     "number": 1331,
     "ticker": "PARSVNATH",
     "name": "Parsvnath Developers Limited",
     "market": 27198.823125
    },
    {
     "number": 1332,
     "ticker": "GSCLCEMENT",
     "name": "Gujarat Sidhee Cement Limited",
     "market": 27177.063744000003
    },
    {
     "number": 1333,
     "ticker": "MIRCELECTR",
     "name": "MIRC Electronics Limited",
     "market": 27136.9327325
    },
    {
     "number": 1334,
     "ticker": "VISHWARAJ",
     "name": "Vishwaraj Sugar Industries Limited",
     "market": 27134.21
    },
    {
     "number": 1335,
     "ticker": "HINDMOTORS",
     "name": "Hindustan Motors Limited",
     "market": 26917.048797
    },
    {
     "number": 1336,
     "ticker": "NINSYS",
     "name": "NINtec Systems Limited",
     "market": 26888.76
    },
    {
     "number": 1337,
     "ticker": "NATHBIOGEN",
     "name": "Nath Bio-Genes (India) Limited",
     "market": 26843.15
    },
    {
     "number": 1338,
     "ticker": "KNAGRI",
     "name": "KN Agri Resources Limited",
     "market": 26836.329885
    },
    {
     "number": 1339,
     "ticker": "GEECEE",
     "name": "GeeCee Ventures Limited",
     "market": 26725.189661999997
    },
    {
     "number": 1340,
     "ticker": "KCPSUGIND",
     "name": "KCP Sugar and Industries Corporation Limited",
     "market": 26702.179275
    },
    {
     "number": 1341,
     "ticker": "STEL",
     "name": "Stel Holdings Limited",
     "market": 26520.416985
    },
    {
     "number": 1342,
     "ticker": "PODDARMENT",
     "name": "Poddar Pigments Limited",
     "market": 26355.24
    },
    {
     "number": 1343,
     "ticker": "KOTYARK",
     "name": "Kotyark Industries Limited",
     "market": 26351.3831
    },
    {
     "number": 1344,
     "ticker": "HITECHCORP",
     "name": "Hitech Corporation Limited",
     "market": 26338.93595
    },
    {
     "number": 1345,
     "ticker": "EUROBOND",
     "name": "Euro Panel Products Limited",
     "market": 26337.5
    },
    {
     "number": 1346,
     "ticker": "MICEL",
     "name": "MIC Electronics Limited",
     "market": 26241.391645500004
    },
    {
     "number": 1347,
     "ticker": "ORICONENT",
     "name": "Oricon Enterprises Limited",
     "market": 26226.968405
    },
    {
     "number": 1348,
     "ticker": "20MICRONS",
     "name": "20 Microns Limited",
     "market": 26217.870985999998
    },
    {
     "number": 1349,
     "ticker": "MWL",
     "name": "Mangalam Worldwide Limited",
     "market": 26215.72118
    },
    {
     "number": 1350,
     "ticker": "MINDTECK",
     "name": "Mindteck (India) Limited",
     "market": 26149.371255
    },
    {
     "number": 1351,
     "ticker": "BMETRICS",
     "name": "Bombay Metrics Supply Chain Limited",
     "market": 26105.5104
    },
    {
     "number": 1352,
     "ticker": "GOKUL",
     "name": "Gokul Refoils and Solvent Limited",
     "market": 26035.685
    },
    {
     "number": 1353,
     "ticker": "SECL",
     "name": "Salasar Exteriors and Contour Limited",
     "market": 25989.3109575
    },
    {
     "number": 1354,
     "ticker": "DUGLOBAL",
     "name": "DUDIGITAL GLOBAL LIMITED",
     "market": 25969.5
    },
    {
     "number": 1355,
     "ticker": "WEL",
     "name": "Wonder Electricals Limited",
     "market": 25957.3496
    },
    {
     "number": 1356,
     "ticker": "SUPERHOUSE",
     "name": "Superhouse Limited",
     "market": 25947.3375
    },
    {
     "number": 1357,
     "ticker": "LOYALTEX",
     "name": "Loyal Textile Mills Limited",
     "market": 25922.112372
    },
    {
     "number": 1358,
     "ticker": "BPL",
     "name": "BPL Limited",
     "market": 25859.196528
    },
    {
     "number": 1359,
     "ticker": "BIRLAMONEY",
     "name": "Aditya Birla Money Limited",
     "market": 25714.287751
    },
    {
     "number": 1360,
     "ticker": "GPTINFRA",
     "name": "GPT Infraprojects Limited",
     "market": 25624.766
    },
    {
     "number": 1361,
     "ticker": "E2E",
     "name": "E2E Networks Limited",
     "market": 25584.785205
    },
    {
     "number": 1362,
     "ticker": "SHIVAMAUTO",
     "name": "Shivam Autotech Limited",
     "market": 25544.444398000003
    },
    {
     "number": 1363,
     "ticker": "DCMNVL",
     "name": "DCM Nouvelle Limited",
     "market": 25214.96115
    },
    {
     "number": 1364,
     "ticker": "MAZDA",
     "name": "Mazda Limited",
     "market": 24820.9875
    },
    {
     "number": 1365,
     "ticker": "MADHAVBAUG",
     "name": "Vaidya Sane Ayurved Laboratories Limited",
     "market": 24706.6075
    },
    {
     "number": 1366,
     "ticker": "WINDMACHIN",
     "name": "Windsor Machines Limited",
     "market": 24544.2204
    },
    {
     "number": 1367,
     "ticker": "BASML",
     "name": "Bannari Amman Spinning Mills Limited",
     "market": 24315.701625
    },
    {
     "number": 1368,
     "ticker": "WALCHANNAG",
     "name": "Walchandnagar Industries Limited",
     "market": 24222.619048
    },
    {
     "number": 1369,
     "ticker": "SEJALLTD",
     "name": "Sejal Glass Limited",
     "market": 24083.45
    },
    {
     "number": 1370,
     "ticker": "UCALFUEL",
     "name": "Ucal Fuel Systems Limited",
     "market": 23993.283125
    },
    {
     "number": 1371,
     "ticker": "MAHEPC",
     "name": "Mahindra EPC Irrigation Limited",
     "market": 23983.33944
    },
    {
     "number": 1372,
     "ticker": "V2RETAIL",
     "name": "V2 Retail Limited",
     "market": 23969.370677
    },
    {
     "number": 1373,
     "ticker": "SAKUMA",
     "name": "Sakuma Exports Limited",
     "market": 23925.06186
    },
    {
     "number": 1374,
     "ticker": "VERTOZ",
     "name": "Vertoz Advertising Limited",
     "market": 23910.075
    },
    {
     "number": 1375,
     "ticker": "KMSUGAR",
     "name": "K.M.Sugar Mills Limited",
     "market": 23874.044115
    },
    {
     "number": 1376,
     "ticker": "ASHIMASYN",
     "name": "Ashima Limited",
     "market": 23861.679711
    },
    {
     "number": 1377,
     "ticker": "UFO",
     "name": "UFO Moviez India Limited",
     "market": 23841.055635
    },
    {
     "number": 1378,
     "ticker": "VIKASECO",
     "name": "Vikas EcoTech Limited",
     "market": 23714.4006
    },
    {
     "number": 1379,
     "ticker": "SAKHTISUG",
     "name": "Sakthi Sugars Limited",
     "market": 23710.382682
    },
    {
     "number": 1380,
     "ticker": "MAHESHWARI",
     "name": "Maheshwari Logistics Limited",
     "market": 23574.1698
    },
    {
     "number": 1381,
     "ticker": "MAANALU",
     "name": "Maan Aluminium Limited",
     "market": 23540.437056
    },
    {
     "number": 1382,
     "ticker": "HUBTOWN",
     "name": "Hubtown Limited",
     "market": 23511.448268
    },
    {
     "number": 1383,
     "ticker": "REPL",
     "name": "Rudrabhishek Enterprises Limited",
     "market": 23412.375
    },
    {
     "number": 1384,
     "ticker": "QMSMEDI",
     "name": "QMS Medical Allied Services Limited",
     "market": 23329.95
    },
    {
     "number": 1385,
     "ticker": "MANAKSTEEL",
     "name": "Manaksia Steels Limited",
     "market": 23264.58775
    },
    {
     "number": 1386,
     "ticker": "EMAMIREAL",
     "name": "Emami Realty Limited",
     "market": 23236.147846
    },
    {
     "number": 1387,
     "ticker": "GENCON",
     "name": "Generic Engineering Construction and Projects Limited",
     "market": 23176.6183
    },
    {
     "number": 1388,
     "ticker": "STARPAPER",
     "name": "Star Paper Mills Limited",
     "market": 22842.820225
    },
    {
     "number": 1389,
     "ticker": "GUJAPOLLO",
     "name": "Gujarat Apollo Industries Limited",
     "market": 22744.5
    },
    {
     "number": 1390,
     "ticker": "JAYSREETEA",
     "name": "Jayshree Tea & Industries Limited",
     "market": 22712.144311999997
    },
    {
     "number": 1391,
     "ticker": "NDL",
     "name": "Nandan Denim Limited",
     "market": 22631.105376
    },
    {
     "number": 1392,
     "ticker": "BCONCEPTS",
     "name": "Brand Concepts Limited",
     "market": 22525.4898
    },
    {
     "number": 1393,
     "ticker": "GIRRESORTS",
     "name": "GIR Natureview Resorts Limited",
     "market": 22472.058125
    },
    {
     "number": 1394,
     "ticker": "SMLT",
     "name": "Sarthak Metals Limited",
     "market": 22451.19
    },
    {
     "number": 1395,
     "ticker": "TPLPLASTEH",
     "name": "TPL Plastech Limited",
     "market": 22308.858
    },
    {
     "number": 1396,
     "ticker": "TEMBO",
     "name": "Tembo Global Industries Limited",
     "market": 22224.147619
    },
    {
     "number": 1397,
     "ticker": "DANGEE",
     "name": "Dangee Dums Limited",
     "market": 22095.4125
    },
    {
     "number": 1398,
     "ticker": "NIPPOBATRY",
     "name": "Indo-National Limited",
     "market": 22068.75
    },
    {
     "number": 1399,
     "ticker": "ASIANHOTNR",
     "name": "Asian Hotels (North) Limited",
     "market": 22040.508457
    },
    {
     "number": 1400,
     "ticker": "BRNL",
     "name": "Bharat Road Network Limited",
     "market": 22036.875
    },
    {
     "number": 1401,
     "ticker": "PPAP",
     "name": "PPAP Automotive Limited",
     "market": 21980
    },
    {
     "number": 1402,
     "ticker": "PASUPTAC",
     "name": "Pasupati Acrylon Limited",
     "market": 21882.1812055
    },
    {
     "number": 1403,
     "ticker": "FROG",
     "name": "Frog Cellsat Limited",
     "market": 21809.7212
    },
    {
     "number": 1404,
     "ticker": "ASAHISONG",
     "name": "Asahi Songwon Colors Limited",
     "market": 21800.541069000003
    },
    {
     "number": 1405,
     "ticker": "PRECOT",
     "name": "Precot Limited",
     "market": 21792
    },
    {
     "number": 1406,
     "ticker": "MEP",
     "name": "MEP Infrastructure Developers Limited",
     "market": 21738.3570435
    },
    {
     "number": 1407,
     "ticker": "VENUSREM",
     "name": "Venus Remedies Limited",
     "market": 21714.672006
    },
    {
     "number": 1408,
     "ticker": "KILITCH",
     "name": "Kilitch Drugs (India) Limited",
     "market": 21690.588048
    },
    {
     "number": 1409,
     "ticker": "BTML",
     "name": "Bodhi Tree Multimedia Limited",
     "market": 21618.08
    },
    {
     "number": 1410,
     "ticker": "MEGASTAR",
     "name": "Megastar Foods Limited",
     "market": 21507.955
    },
    {
     "number": 1411,
     "ticker": "DRCSYSTEMS",
     "name": "DRC Systems India Limited",
     "market": 21446.15631
    },
    {
     "number": 1412,
     "ticker": "ZODIACLOTH",
     "name": "Zodiac Clothing Company Limited",
     "market": 21275.8573645
    },
    {
     "number": 1413,
     "ticker": "HILTON",
     "name": "Hilton Metal Forging Limited",
     "market": 20979
    },
    {
     "number": 1414,
     "ticker": "INDOTHAI",
     "name": "Indo Thai Securities Limited",
     "market": 20855
    },
    {
     "number": 1415,
     "ticker": "JITFINFRA",
     "name": "JITF Infralogistics Limited",
     "market": 20845.705566
    },
    {
     "number": 1416,
     "ticker": "EROSMEDIA",
     "name": "Eros International Media Limited",
     "market": 20765.4067635
    },
    {
     "number": 1417,
     "ticker": "DEVIT",
     "name": "Dev Information Technology Limited",
     "market": 20724.99702
    },
    {
     "number": 1418,
     "ticker": "BIL",
     "name": "Bhartiya International Limited",
     "market": 20703.290784
    },
    {
     "number": 1419,
     "ticker": "EIMCOELECO",
     "name": "Eimco Elecon (India) Limited",
     "market": 20546.98737
    },
    {
     "number": 1420,
     "ticker": "ANMOL",
     "name": "Anmol India Limited",
     "market": 20511.85966
    },
    {
     "number": 1421,
     "ticker": "COASTCORP",
     "name": "Coastal Corporation Limited",
     "market": 20384.4774
    },
    {
     "number": 1422,
     "ticker": "RAJTV",
     "name": "Raj Television Network Limited",
     "market": 20375.98752
    },
    {
     "number": 1423,
     "ticker": "KORE",
     "name": "Jay Jalaram Technologies Limited",
     "market": 20356.77
    },
    {
     "number": 1424,
     "ticker": "RELCAPITAL",
     "name": "Reliance Capital Limited",
     "market": 20216.71216
    },
    {
     "number": 1425,
     "ticker": "MGEL",
     "name": "Mangalam Global Enterprise Limited",
     "market": 20090.558375
    },
    {
     "number": 1426,
     "ticker": "FOCE",
     "name": "Foce India Limited",
     "market": 20060.9925
    },
    {
     "number": 1427,
     "ticker": "INDTERRAIN",
     "name": "Indian Terrain Fashions Limited",
     "market": 19975.549935
    },
    {
     "number": 1428,
     "ticker": "TAKE",
     "name": "Take Solutions Limited",
     "market": 19971.09
    },
    {
     "number": 1429,
     "ticker": "TOTAL",
     "name": "Total Transport Systems Limited",
     "market": 19957.1290875
    },
    {
     "number": 1430,
     "ticker": "ACCURACY",
     "name": "Accuracy Shipping Limited",
     "market": 19949.2
    },
    {
     "number": 1431,
     "ticker": "AVG",
     "name": "AVG Logistics Limited",
     "market": 19894.3203545
    },
    {
     "number": 1432,
     "ticker": "HARRMALAYA",
     "name": "Harrisons  Malayalam Limited",
     "market": 19784.19416
    },
    {
     "number": 1433,
     "ticker": "SHREYANIND",
     "name": "Shreyans Industries Limited",
     "market": 19742.1
    },
    {
     "number": 1434,
     "ticker": "LOKESHMACH",
     "name": "Lokesh Machines Limited",
     "market": 19686.447
    },
    {
     "number": 1435,
     "ticker": "LGBFORGE",
     "name": "LGB Forge Limited",
     "market": 19651.7031975
    },
    {
     "number": 1436,
     "ticker": "SYSTANGO",
     "name": "Systango Technologies Limited",
     "market": 19480.1664
    },
    {
     "number": 1437,
     "ticker": "SIGMA",
     "name": "Sigma Solve Limited",
     "market": 19439.89125
    },
    {
     "number": 1438,
     "ticker": "MARALOVER",
     "name": "Maral Overseas Limited",
     "market": 19425.744
    },
    {
     "number": 1439,
     "ticker": "ABAN",
     "name": "Aban Offshore Limited",
     "market": 19406.4698975
    },
    {
     "number": 1440,
     "ticker": "BAFNAPH",
     "name": "Bafna Pharmaceuticals Limited",
     "market": 19398.1947
    },
    {
     "number": 1441,
     "ticker": "BEDMUTHA",
     "name": "Bedmutha Industries Limited",
     "market": 19390.594284000003
    },
    {
     "number": 1442,
     "ticker": "SIMPLEXINF",
     "name": "Simplex Infrastructures Limited",
     "market": 19314.27316
    },
    {
     "number": 1443,
     "ticker": "ARIES",
     "name": "Aries Agro Limited",
     "market": 19304.9412455
    },
    {
     "number": 1444,
     "ticker": "DTIL",
     "name": "Dhunseri Tea & Industries Limited",
     "market": 19086.7411455
    },
    {
     "number": 1445,
     "ticker": "KRITINUT",
     "name": "Kriti Nutrients Limited",
     "market": 19039.3376
    },
    {
     "number": 1446,
     "ticker": "IVC",
     "name": "IL&FS Investment Managers Limited",
     "market": 18527.93166
    },
    {
     "number": 1447,
     "ticker": "IITL",
     "name": "Industrial Investment Trust Limited",
     "market": 18433.365975
    },
    {
     "number": 1448,
     "ticker": "SWASTIK",
     "name": "Swastik Pipe Limited",
     "market": 18422.54778
    },
    {
     "number": 1449,
     "ticker": "AARON",
     "name": "Aaron Industries Limited",
     "market": 18415.5621565
    },
    {
     "number": 1450,
     "ticker": "VITAL",
     "name": "Vital Chemtech Limited",
     "market": 18406.42035
    },
    {
     "number": 1451,
     "ticker": "BEWLTD",
     "name": "BEW Engineering Limited",
     "market": 18339.5100355
    },
    {
     "number": 1452,
     "ticker": "NILAINFRA",
     "name": "Nila Infrastructures Limited",
     "market": 18315.8478
    },
    {
     "number": 1453,
     "ticker": "INDOTECH",
     "name": "Indo Tech Transformers Limited",
     "market": 18261.09
    },
    {
     "number": 1454,
     "ticker": "PVP",
     "name": "PVP Ventures Limited",
     "market": 18133.899874000002
    },
    {
     "number": 1455,
     "ticker": "AHLEAST",
     "name": "Asian Hotels (East) Limited",
     "market": 18035.238928
    },
    {
     "number": 1456,
     "ticker": "SAH",
     "name": "Sah Polymers Limited",
     "market": 18018.506
    },
    {
     "number": 1457,
     "ticker": "TIPSFILMS",
     "name": "Tips Films Limited",
     "market": 17950.784115
    },
    {
     "number": 1458,
     "ticker": "PHANTOMFX",
     "name": "Phantom Digital Effects Limited",
     "market": 17820.84
    },
    {
     "number": 1459,
     "ticker": "DUCOL",
     "name": "Ducol Organics And Colours Limited",
     "market": 17731.53
    },
    {
     "number": 1460,
     "ticker": "KANPRPLA",
     "name": "Kanpur Plastipack Limited",
     "market": 17690.329104
    },
    {
     "number": 1461,
     "ticker": "VINNY",
     "name": "Vinny Overseas Limited",
     "market": 17679.37156
    },
    {
     "number": 1462,
     "ticker": "MCLEODRUSS",
     "name": "Mcleod Russel India Limited",
     "market": 17653.019215
    },
    {
     "number": 1463,
     "ticker": "TRF",
     "name": "TRF Limited",
     "market": 17623.565818
    },
    {
     "number": 1464,
     "ticker": "ALLETEC",
     "name": "All E Technologies Limited",
     "market": 17599.224384
    },
    {
     "number": 1465,
     "ticker": "MANOMAY",
     "name": "Manomay Tex India Limited",
     "market": 17590.6533
    },
    {
     "number": 1466,
     "ticker": "INSPIRISYS",
     "name": "Inspirisys Solutions Limited",
     "market": 17510.657865999998
    },
    {
     "number": 1467,
     "ticker": "AIRAN",
     "name": "Airan Limited",
     "market": 17377.78
    },
    {
     "number": 1468,
     "ticker": "MODISONLTD",
     "name": "MODISON LIMITED",
     "market": 17344.525
    },
    {
     "number": 1469,
     "ticker": "MURUDCERA",
     "name": "Murudeshwar Ceramics Limited",
     "market": 17308.578
    },
    {
     "number": 1470,
     "ticker": "TIRUPATI",
     "name": "Shree Tirupati Balajee FIBC Limited",
     "market": 17266.65318
    },
    {
     "number": 1471,
     "ticker": "PAR",
     "name": "Par Drugs And Chemicals Limited",
     "market": 17226.4904
    },
    {
     "number": 1472,
     "ticker": "SGIL",
     "name": "Synergy Green Industries Limited",
     "market": 16977.195
    },
    {
     "number": 1473,
     "ticker": "SPLIL",
     "name": "SPL Industries Limited",
     "market": 16965.00234
    },
    {
     "number": 1474,
     "ticker": "GEEKAYWIRE",
     "name": "Geekay Wires Limited",
     "market": 16838.172
    },
    {
     "number": 1475,
     "ticker": "PALREDTEC",
     "name": "Palred Technologies Limited",
     "market": 16728.034005
    },
    {
     "number": 1476,
     "ticker": "ESSARSHPNG",
     "name": "Essar Shipping Limited",
     "market": 16558.08576
    },
    {
     "number": 1477,
     "ticker": "SIL",
     "name": "Standard Industries Limited",
     "market": 16532.537837
    },
    {
     "number": 1478,
     "ticker": "PRITI",
     "name": "Priti International Limited",
     "market": 16527.78283
    },
    {
     "number": 1479,
     "ticker": "AKSHARCHEM",
     "name": "AksharChem India Limited",
     "market": 16471.8694995
    },
    {
     "number": 1480,
     "ticker": "RAMANEWS",
     "name": "Shree Rama Newsprint Limited",
     "market": 16448.706567999998
    },
    {
     "number": 1481,
     "ticker": "RUCHINFRA",
     "name": "Ruchi Infrastructure Limited",
     "market": 16419.19536
    },
    {
     "number": 1482,
     "ticker": "ALANKIT",
     "name": "Alankit Limited",
     "market": 16392.7413
    },
    {
     "number": 1483,
     "ticker": "MEGASOFT",
     "name": "Megasoft Limited",
     "market": 16303.179060999999
    },
    {
     "number": 1484,
     "ticker": "IZMO",
     "name": "IZMO Limited",
     "market": 16237.2822625
    },
    {
     "number": 1485,
     "ticker": "GULFPETRO",
     "name": "GP Petroleums Limited",
     "market": 16187.5416025
    },
    {
     "number": 1486,
     "ticker": "TOUCHWOOD",
     "name": "Touchwood Entertainment Limited",
     "market": 16152.5451925
    },
    {
     "number": 1487,
     "ticker": "SARVESHWAR",
     "name": "Sarveshwar Foods Limited",
     "market": 16128.3668
    },
    {
     "number": 1488,
     "ticker": "TARMAT",
     "name": "Tarmat Limited",
     "market": 16081.6053975
    },
    {
     "number": 1489,
     "ticker": "RPPL",
     "name": "Rajshree Polypack Limited",
     "market": 16080.1205
    },
    {
     "number": 1490,
     "ticker": "IEL",
     "name": "Indiabulls Enterprises Limited",
     "market": 15966.128258499999
    },
    {
     "number": 1491,
     "ticker": "BHARATGEAR",
     "name": "Bharat Gears Limited",
     "market": 15884.807501
    },
    {
     "number": 1492,
     "ticker": "GOLDTECH",
     "name": "Goldstone Technologies Limited",
     "market": 15855.877261
    },
    {
     "number": 1493,
     "ticker": "MBLINFRA",
     "name": "MBL Infrastructure Limited",
     "market": 15765.570912000001
    },
    {
     "number": 1494,
     "ticker": "PROPEQUITY",
     "name": "P. E. Analytics Limited",
     "market": 15759.843364
    },
    {
     "number": 1495,
     "ticker": "EMKAY",
     "name": "Emkay Global Financial Services Limited",
     "market": 15745.10697
    },
    {
     "number": 1496,
     "ticker": "IL&FSENGG",
     "name": "IL&FS Engineering and Construction Company Limited",
     "market": 15734.52936
    },
    {
     "number": 1497,
     "ticker": "BSL",
     "name": "BSL Limited",
     "market": 15726.432704
    },
    {
     "number": 1498,
     "ticker": "UNITEDPOLY",
     "name": "United Polyfab Gujarat Limited",
     "market": 15703.186725
    },
    {
     "number": 1499,
     "ticker": "PASHUPATI",
     "name": "Pashupati Cotspin Limited",
     "market": 15604.964
    },
    {
     "number": 1500,
     "ticker": "SHIVATEX",
     "name": "Shiva Texyarn Limited",
     "market": 15535.8115305
    },
    {
     "number": 1501,
     "ticker": "MANGALAM",
     "name": "Mangalam Drugs And Organics Limited",
     "market": 15511.68304
    },
    {
     "number": 1502,
     "ticker": "KRISHNADEF",
     "name": "Krishna Defence and Allied Industries Limited",
     "market": 15477.696
    },
    {
     "number": 1503,
     "ticker": "PREMIERPOL",
     "name": "Premier Polyfilm Limited",
     "market": 15428.5665675
    },
    {
     "number": 1504,
     "ticker": "SMSLIFE",
     "name": "SMS Lifesciences India Limited",
     "market": 15420.2753435
    },
    {
     "number": 1505,
     "ticker": "GOLDSTAR",
     "name": "Goldstar Power Limited",
     "market": 15405.12
    },
    {
     "number": 1506,
     "ticker": "BROOKS",
     "name": "Brooks Laboratories Limited",
     "market": 15402.203282
    },
    {
     "number": 1507,
     "ticker": "VAISHALI",
     "name": "Vaishali Pharma Limited",
     "market": 15386.924767
    },
    {
     "number": 1508,
     "ticker": "ALMONDZ",
     "name": "Almondz Global Securities Limited",
     "market": 15375.670398
    },
    {
     "number": 1509,
     "ticker": "3RDROCK",
     "name": "3rd Rock Multimedia Limited",
     "market": 15316.15
    },
    {
     "number": 1510,
     "ticker": "PRESSMN",
     "name": "Pressman Advertising Limited",
     "market": 15299.0722145
    },
    {
     "number": 1511,
     "ticker": "AARVI",
     "name": "Aarvi Encon Limited",
     "market": 15271.872
    },
    {
     "number": 1512,
     "ticker": "AKSHAR",
     "name": "Akshar Spintex Limited",
     "market": 15249.39
    },
    {
     "number": 1513,
     "ticker": "LATTEYS",
     "name": "Latteys Industries Limited",
     "market": 15236.393625
    },
    {
     "number": 1514,
     "ticker": "VISESHINFO",
     "name": "Visesh Infotecnics Limited",
     "market": 15097.74662
    },
    {
     "number": 1515,
     "ticker": "BHAGYANGR",
     "name": "Bhagyanagar India Limited",
     "market": 15037.65
    },
    {
     "number": 1516,
     "ticker": "TTL",
     "name": "T T Limited",
     "market": 14984.14085
    },
    {
     "number": 1517,
     "ticker": "SADBHAV",
     "name": "Sadbhav Engineering Limited",
     "market": 14840.8742
    },
    {
     "number": 1518,
     "ticker": "COMPUSOFT",
     "name": "Compucom Software Limited",
     "market": 14796.410156
    },
    {
     "number": 1519,
     "ticker": "KAKATCEM",
     "name": "Kakatiya Cement Sugar & Industries Limited",
     "market": 14793.651774000002
    },
    {
     "number": 1520,
     "ticker": "RPPINFRA",
     "name": "R.P.P. Infra Projects Limited",
     "market": 14789.52279
    },
    {
     "number": 1521,
     "ticker": "SVLL",
     "name": "Shree Vasu Logistics Limited",
     "market": 14779.674
    },
    {
     "number": 1522,
     "ticker": "SMARTLINK",
     "name": "Smartlink Holdings Limited",
     "market": 14763
    },
    {
     "number": 1523,
     "ticker": "ASPINWALL",
     "name": "Aspinwall and Company Limited",
     "market": 14760.927744
    },
    {
     "number": 1524,
     "ticker": "LAMBODHARA",
     "name": "Lambodhara Textiles Limited",
     "market": 14684.304
    },
    {
     "number": 1525,
     "ticker": "DJML",
     "name": "DJ Mediaprint & Logistics Limited",
     "market": 14682.55104
    },
    {
     "number": 1526,
     "ticker": "TIL",
     "name": "TIL Limited",
     "market": 14649.2020325
    },
    {
     "number": 1527,
     "ticker": "ELGIRUBCO",
     "name": "Elgi Rubber Company Limited",
     "market": 14639.625
    },
    {
     "number": 1528,
     "ticker": "JAINAM",
     "name": "Jainam Ferro Alloys (I) Limited",
     "market": 14585.0172
    },
    {
     "number": 1529,
     "ticker": "WORTH",
     "name": "Worth Peripherals Limited",
     "market": 14490.92
    },
    {
     "number": 1530,
     "ticker": "ISFT",
     "name": "Intrasoft Technologies Limited",
     "market": 14481.239474000002
    },
    {
     "number": 1531,
     "ticker": "GINNIFILA",
     "name": "Ginni Filaments Limited",
     "market": 14474.860985
    },
    {
     "number": 1532,
     "ticker": "PILITA",
     "name": "PIL ITALICA LIFESTYLE LIMITED",
     "market": 14452.5
    },
    {
     "number": 1533,
     "ticker": "SOFTTECH",
     "name": "Softtech Engineers Limited",
     "market": 14436.78243
    },
    {
     "number": 1534,
     "ticker": "DUCON",
     "name": "Ducon Infratechnologies Limited",
     "market": 14426.6960295
    },
    {
     "number": 1535,
     "ticker": "VETO",
     "name": "Veto Switchgears And Cables Limited",
     "market": 14374.44616
    },
    {
     "number": 1536,
     "ticker": "RANEENGINE",
     "name": "Rane Engine Valve Limited",
     "market": 14266.52068
    },
    {
     "number": 1537,
     "ticker": "AVONMORE",
     "name": "Avonmore Capital & Management Services Limited",
     "market": 14222.11098
    },
    {
     "number": 1538,
     "ticker": "KBCGLOBAL",
     "name": "KBC Global Limited",
     "market": 14145.000483
    },
    {
     "number": 1539,
     "ticker": "PANSARI",
     "name": "Pansari Developers Limited",
     "market": 14070.8442
    },
    {
     "number": 1540,
     "ticker": "MODIRUBBER",
     "name": "Modi Rubber Limited",
     "market": 14060.258718
    },
    {
     "number": 1541,
     "ticker": "INVENTURE",
     "name": "Inventure Growth & Securities Limited",
     "market": 13860
    },
    {
     "number": 1542,
     "ticker": "KAPSTON",
     "name": "Kapston Services Limited",
     "market": 13831.427173499998
    },
    {
     "number": 1543,
     "ticker": "AKSHOPTFBR",
     "name": "Aksh Optifibre Limited",
     "market": 13747.9785495
    },
    {
     "number": 1544,
     "ticker": "JMA",
     "name": "Jullundur Motor Agency (Delhi) Limited",
     "market": 13738.893981
    },
    {
     "number": 1545,
     "ticker": "EMMBI",
     "name": "Emmbi Industries Limited",
     "market": 13736.479125
    },
    {
     "number": 1546,
     "ticker": "NITCO",
     "name": "Nitco Limited",
     "market": 13725.060405
    },
    {
     "number": 1547,
     "ticker": "IRIS",
     "name": "Iris Business Services Limited",
     "market": 13668.980372
    },
    {
     "number": 1548,
     "ticker": "SHERA",
     "name": "Shera Energy Limited",
     "market": 13559.066465
    },
    {
     "number": 1549,
     "ticker": "DRSDILIP",
     "name": "DRS Dilip Roadlines Limited",
     "market": 13548.631498499999
    },
    {
     "number": 1550,
     "ticker": "UNITEDTEA",
     "name": "The United Nilgiri Tea Estates Company Limited",
     "market": 13475.738502
    },
    {
     "number": 1551,
     "ticker": "JOCIL",
     "name": "Jocil Limited",
     "market": 13454.94225
    },
    {
     "number": 1552,
     "ticker": "MANAKALUCO",
     "name": "Manaksia Aluminium Company Limited",
     "market": 13368.9462
    },
    {
     "number": 1553,
     "ticker": "VIPULLTD",
     "name": "Vipul Limited",
     "market": 13258.28504
    },
    {
     "number": 1554,
     "ticker": "SIKKO",
     "name": "Sikko Industries Limited",
     "market": 13255.2
    },
    {
     "number": 1555,
     "ticker": "GILLANDERS",
     "name": "Gillanders Arbuthnot & Company Limited",
     "market": 13157.556309000001
    },
    {
     "number": 1556,
     "ticker": "SVPGLOB",
     "name": "SVP GLOBAL TEXTILES LIMITED",
     "market": 13092.75
    },
    {
     "number": 1557,
     "ticker": "VISASTEEL",
     "name": "Visa Steel Limited",
     "market": 13084.2135
    },
    {
     "number": 1558,
     "ticker": "DCM",
     "name": "DCM  Limited",
     "market": 13083.7631745
    },
    {
     "number": 1559,
     "ticker": "INTENTECH",
     "name": "Intense Technologies Limited",
     "market": 12991.344996500002
    },
    {
     "number": 1560,
     "ticker": "TEXMOPIPES",
     "name": "Texmo Pipes and Products Limited",
     "market": 12977.1775
    },
    {
     "number": 1561,
     "ticker": "WEIZMANIND",
     "name": "Weizmann Limited",
     "market": 12956.820157
    },
    {
     "number": 1562,
     "ticker": "BYKE",
     "name": "The Byke Hospitality Ltd",
     "market": 12951.5894
    },
    {
     "number": 1563,
     "ticker": "RAJSREESUG",
     "name": "Rajshree Sugars & Chemicals Limited",
     "market": 12922.88634
    },
    {
     "number": 1564,
     "ticker": "ZODIAC",
     "name": "Zodiac Energy Limited",
     "market": 12914.0108
    },
    {
     "number": 1565,
     "ticker": "ARSHIYA",
     "name": "Arshiya Limited",
     "market": 12910.319835
    },
    {
     "number": 1566,
     "ticker": "UMANGDAIRY",
     "name": "Umang Dairies Limited",
     "market": 12904.8768
    },
    {
     "number": 1567,
     "ticker": "LOVABLE",
     "name": "Lovable Lingerie Limited",
     "market": 12898.2
    },
    {
     "number": 1568,
     "ticker": "HOMESFY",
     "name": "Homesfy Realty Limited",
     "market": 12801.288
    },
    {
     "number": 1569,
     "ticker": "ALPHAGEO",
     "name": "Alphageo (India) Limited",
     "market": 12745.4459175
    },
    {
     "number": 1570,
     "ticker": "NDGL",
     "name": "Naga Dhunseri Group Limited",
     "market": 12715
    },
    {
     "number": 1571,
     "ticker": "PRAXIS",
     "name": "Praxis Home Retail Limited",
     "market": 12712.578816
    },
    {
     "number": 1572,
     "ticker": "ARTNIRMAN",
     "name": "Art Nirman Limited",
     "market": 12652.692
    },
    {
     "number": 1573,
     "ticker": "SHIGAN",
     "name": "Shigan Quantum Technologies Limited",
     "market": 12575.48445
    },
    {
     "number": 1574,
     "ticker": "NOIDATOLL",
     "name": "Noida Toll Bridge Company Limited",
     "market": 12568.162635
    },
    {
     "number": 1575,
     "ticker": "UMAEXPORTS",
     "name": "Uma Exports Limited",
     "market": 12543.44693
    },
    {
     "number": 1576,
     "ticker": "VELS",
     "name": "Vels Film International Limited",
     "market": 12520.76
    },
    {
     "number": 1577,
     "ticker": "ATLANTA",
     "name": "Atlanta  Limited",
     "market": 12510.25
    },
    {
     "number": 1578,
     "ticker": "MOTOGENFIN",
     "name": "The Motor & General Finance Limited",
     "market": 12508.88237
    },
    {
     "number": 1579,
     "ticker": "AVROIND",
     "name": "AVRO INDIA LIMITED",
     "market": 12493.2449
    },
    {
     "number": 1580,
     "ticker": "SALONA",
     "name": "Salona Cotspin Limited",
     "market": 12463.9944
    },
    {
     "number": 1581,
     "ticker": "INDIANCARD",
     "name": "Indian Card Clothing Company Limited",
     "market": 12458.52864
    },
    {
     "number": 1582,
     "ticker": "SPTL",
     "name": "Sintex Plastics Technology Limited",
     "market": 12404.816697
    },
    {
     "number": 1583,
     "ticker": "PRITIKAUTO",
     "name": "Pritika Auto Industries Limited",
     "market": 12369.81375
    },
    {
     "number": 1584,
     "ticker": "URAVI",
     "name": "Uravi T and Wedge Lamps Limited",
     "market": 12358.5
    },
    {
     "number": 1585,
     "ticker": "IVP",
     "name": "IVP Limited",
     "market": 12293.4161015
    },
    {
     "number": 1586,
     "ticker": "MAHAPEXLTD",
     "name": "Maha Rashtra Apex Corporation Limited",
     "market": 12282.2868
    },
    {
     "number": 1587,
     "ticker": "SOMATEX",
     "name": "Soma Textiles & Industries Limited",
     "market": 12255.243
    },
    {
     "number": 1588,
     "ticker": "LEXUS",
     "name": "Lexus Granito (India) Limited",
     "market": 12214.895826
    },
    {
     "number": 1589,
     "ticker": "WANBURY",
     "name": "Wanbury Limited",
     "market": 12199.150754
    },
    {
     "number": 1590,
     "ticker": "LOTUSEYE",
     "name": "Lotus Eye Hospital and Institute Limited",
     "market": 12186.64938
    },
    {
     "number": 1591,
     "ticker": "KREBSBIO",
     "name": "Krebs Biochemicals and Industries Limited",
     "market": 12181.73109
    },
    {
     "number": 1592,
     "ticker": "RNAVAL",
     "name": "Reliance Naval and Engineering Limited",
     "market": 12170.2558395
    },
    {
     "number": 1593,
     "ticker": "WSI",
     "name": "W S Industries (I) Limited",
     "market": 12124.8199905
    },
    {
     "number": 1594,
     "ticker": "RHFL",
     "name": "Reliance Home Finance Limited",
     "market": 12113.892075
    },
    {
     "number": 1595,
     "ticker": "HDIL",
     "name": "Housing Development and Infrastructure Limited",
     "market": 12087.101643
    },
    {
     "number": 1596,
     "ticker": "DCI",
     "name": "Dc Infotech And Communication Limited",
     "market": 12048
    },
    {
     "number": 1597,
     "ticker": "RVHL",
     "name": "Ravinder Heights Limited",
     "market": 12035.771589000002
    },
    {
     "number": 1598,
     "ticker": "XELPMOC",
     "name": "Xelpmoc Design And Tech Limited",
     "market": 11906.034453499999
    },
    {
     "number": 1599,
     "ticker": "RKEC",
     "name": "RKEC Projects Limited",
     "market": 11875.347
    },
    {
     "number": 1600,
     "ticker": "RELCHEMQ",
     "name": "Reliance Chemotex Industries Limited",
     "market": 11869.7963805
    },
    {
     "number": 1601,
     "ticker": "DIL",
     "name": "Debock Industries Limited",
     "market": 11848.2
    },
    {
     "number": 1602,
     "ticker": "ATALREAL",
     "name": "Atal Realtech Limited",
     "market": 11782.392
    },
    {
     "number": 1603,
     "ticker": "KOHINOOR",
     "name": "Kohinoor Foods Limited",
     "market": 11696.067715
    },
    {
     "number": 1604,
     "ticker": "SALSTEEL",
     "name": "S.A.L. Steel Limited",
     "market": 11640.4379
    },
    {
     "number": 1605,
     "ticker": "A2ZINFRA",
     "name": "A2Z Infra Engineering Limited",
     "market": 11623.910628
    },
    {
     "number": 1606,
     "ticker": "TARACHAND",
     "name": "Tara Chand InfraLogistic Solutions Limited",
     "market": 11598.233
    },
    {
     "number": 1607,
     "ticker": "INDOWIND",
     "name": "Indowind Energy Limited",
     "market": 11558.70336
    },
    {
     "number": 1608,
     "ticker": "BLBLIMITED",
     "name": "BLB Limited",
     "market": 11498.193615
    },
    {
     "number": 1609,
     "ticker": "FRETAIL",
     "name": "Future Retail Limited",
     "market": 11387.965659000001
    },
    {
     "number": 1610,
     "ticker": "ROML",
     "name": "Raj Oil Mills Limited",
     "market": 11361.422472
    },
    {
     "number": 1611,
     "ticker": "SURANAT&P",
     "name": "Surana Telecom and Power Limited",
     "market": 11335.9569105
    },
    {
     "number": 1612,
     "ticker": "ALPA",
     "name": "Alpa Laboratories Limited",
     "market": 11319.8428
    },
    {
     "number": 1613,
     "ticker": "SUNDRMBRAK",
     "name": "Sundaram Brake Linings Limited",
     "market": 11142.7164
    },
    {
     "number": 1614,
     "ticker": "PARIN",
     "name": "Parin Furniture Limited",
     "market": 11056.851
    },
    {
     "number": 1615,
     "ticker": "NILASPACES",
     "name": "Nila Spaces Limited",
     "market": 11028.8976
    },
    {
     "number": 1616,
     "ticker": "AHLADA",
     "name": "Ahlada Engineers Limited",
     "market": 10969.929
    },
    {
     "number": 1617,
     "ticker": "MAGNUM",
     "name": "Magnum Ventures Limited",
     "market": 10942.148244000002
    },
    {
     "number": 1618,
     "ticker": "REMSONSIND",
     "name": "Remsons Industries Limited",
     "market": 10918.225227
    },
    {
     "number": 1619,
     "ticker": "STARTECK",
     "name": "Starteck Finance Limited",
     "market": 10881.54234
    },
    {
     "number": 1620,
     "ticker": "BOHRAIND",
     "name": "Bohra Industries Limited",
     "market": 10865.83552
    },
    {
     "number": 1621,
     "ticker": "COMPINFO",
     "name": "Compuage Infocom Limited",
     "market": 10849.660096
    },
    {
     "number": 1622,
     "ticker": "CORALFINAC",
     "name": "Coral India Finance & Housing Limited",
     "market": 10800.9963
    },
    {
     "number": 1623,
     "ticker": "MRO-TEK",
     "name": "MRO-TEK Realty Limited",
     "market": 10706.276946
    },
    {
     "number": 1624,
     "ticker": "SECURKLOUD",
     "name": "SECUREKLOUD TECHNOLOGIES LIMITED",
     "market": 10641.2776925
    },
    {
     "number": 1625,
     "ticker": "ZEELEARN",
     "name": "Zee Learn Limited",
     "market": 10598.0135625
    },
    {
     "number": 1626,
     "ticker": "SADBHIN",
     "name": "Sadbhav Infrastructure Project Limited",
     "market": 10566.75648
    },
    {
     "number": 1627,
     "ticker": "BALPHARMA",
     "name": "Bal Pharma Limited",
     "market": 10520.059176
    },
    {
     "number": 1628,
     "ticker": "NIRAJ",
     "name": "Niraj Cement Structurals Limited",
     "market": 10400.2227
    },
    {
     "number": 1629,
     "ticker": "GSTL",
     "name": "Globesecure Technologies Limited",
     "market": 10365.301162
    },
    {
     "number": 1630,
     "ticker": "OBCL",
     "name": "Orissa Bengal Carrier Limited",
     "market": 10298.942915
    },
    {
     "number": 1631,
     "ticker": "TAINWALCHM",
     "name": "Tainwala Chemical and Plastic (I) Limited",
     "market": 10169.155218
    },
    {
     "number": 1632,
     "ticker": "ARCHIDPLY",
     "name": "Archidply Industries Limited",
     "market": 10071.555
    },
    {
     "number": 1633,
     "ticker": "JHS",
     "name": "JHS Svendgaard Laboratories Limited",
     "market": 10059.572075
    },
    {
     "number": 1634,
     "ticker": "SITINET",
     "name": "Siti Networks Limited",
     "market": 10028.619252
    },
    {
     "number": 1635,
     "ticker": "MUKTAARTS",
     "name": "Mukta Arts Limited",
     "market": 10016.5362
    },
    {
     "number": 1636,
     "ticker": "CMNL",
     "name": "Chaman Metallics Limited",
     "market": 10015.92706
    },
    {
     "number": 1637,
     "ticker": "GAYAPROJ",
     "name": "Gayatri Projects Limited",
     "market": 10015.1296475
    },
    {
     "number": 1638,
     "ticker": "AKG",
     "name": "Akg Exim Limited",
     "market": 9993.733152
    },
    {
     "number": 1639,
     "ticker": "FCONSUMER",
     "name": "Future Consumer Limited",
     "market": 9985.173215
    },
    {
     "number": 1640,
     "ticker": "PALASHSECU",
     "name": "Palash Securities Limited",
     "market": 9908.072531
    },
    {
     "number": 1641,
     "ticker": "CCHHL",
     "name": "Country Club Hospitality & Holidays Limited",
     "market": 9889.6164675
    },
    {
     "number": 1642,
     "ticker": "SIGIND",
     "name": "Signet Industries Limited",
     "market": 9846.6765
    },
    {
     "number": 1643,
     "ticker": "AIROLAM",
     "name": "Airo Lam limited",
     "market": 9811.308
    },
    {
     "number": 1644,
     "ticker": "WELINV",
     "name": "Welspun Investments and Commercials Limited",
     "market": 9790.341204
    },
    {
     "number": 1645,
     "ticker": "LEMERITE",
     "name": "Le Merite Exports Limited",
     "market": 9779.8365
    },
    {
     "number": 1646,
     "ticker": "CTE",
     "name": "Cambridge Technology Enterprises Limited",
     "market": 9766.4299625
    },
    {
     "number": 1647,
     "ticker": "UNIVASTU",
     "name": "Univastu India Limited",
     "market": 9745.1445
    },
    {
     "number": 1648,
     "ticker": "SUNDARAM",
     "name": "Sundaram Multi Pap Limited",
     "market": 9714.4943465
    },
    {
     "number": 1649,
     "ticker": "MANAKCOAT",
     "name": "Manaksia Coated Metals & Industries Limited",
     "market": 9699.0394
    },
    {
     "number": 1650,
     "ticker": "ARVEE",
     "name": "Arvee Laboratories (India) Limited",
     "market": 9697.6
    },
    {
     "number": 1651,
     "ticker": "SECURCRED",
     "name": "SecUR Credentials Limited",
     "market": 9649.7486
    },
    {
     "number": 1652,
     "ticker": "ASTRON",
     "name": "Astron Paper & Board Mill Limited",
     "market": 9602.25
    },
    {
     "number": 1653,
     "ticker": "FLFL",
     "name": "Future Lifestyle Fashions Limited",
     "market": 9584.306515
    },
    {
     "number": 1654,
     "ticker": "STEELCITY",
     "name": "Steel City Securities Limited",
     "market": 9540.1304925
    },
    {
     "number": 1655,
     "ticker": "LLOYDS",
     "name": "Lloyds Luxuries Limited",
     "market": 9450
    },
    {
     "number": 1656,
     "ticker": "GANGESSECU",
     "name": "Ganges Securities Limited",
     "market": 9448.4823715
    },
    {
     "number": 1657,
     "ticker": "INDBANK",
     "name": "Indbank Merchant Banking Services Limited",
     "market": 9363.8002
    },
    {
     "number": 1658,
     "ticker": "SUMIT",
     "name": "Sumit Woods Limited",
     "market": 9329.04842
    },
    {
     "number": 1659,
     "ticker": "FIBERWEB",
     "name": "Fiberweb (India) Limited",
     "market": 9328.51404
    },
    {
     "number": 1660,
     "ticker": "ALKALI",
     "name": "Alkali Metals Limited",
     "market": 9316.99299
    },
    {
     "number": 1661,
     "ticker": "LASA",
     "name": "Lasa Supergenerics Limited",
     "market": 9293.779834500001
    },
    {
     "number": 1662,
     "ticker": "JAIPURKURT",
     "name": "Nandani Creation Limited",
     "market": 9238.6316
    },
    {
     "number": 1663,
     "ticker": "MHHL",
     "name": "Mohini Health & Hygiene Limited",
     "market": 9218.24745
    },
    {
     "number": 1664,
     "ticker": "BAHETI",
     "name": "Baheti Recycling Industries Limited",
     "market": 9170.964785
    },
    {
     "number": 1665,
     "ticker": "DGCONTENT",
     "name": "Digicontent Limited",
     "market": 9106.277707000001
    },
    {
     "number": 1666,
     "ticker": "VMARCIND",
     "name": "V Marc India Limited",
     "market": 9068.707008
    },
    {
     "number": 1667,
     "ticker": "PKTEA",
     "name": "The Peria Karamalai Tea & Produce Company Limited",
     "market": 9056.9940145
    },
    {
     "number": 1668,
     "ticker": "DAMODARIND",
     "name": "Damodar Industries Limited",
     "market": 9028.75
    },
    {
     "number": 1669,
     "ticker": "NECCLTD",
     "name": "North Eastern Carrying Corporation Limited",
     "market": 8985.323144
    },
    {
     "number": 1670,
     "ticker": "CAPTRUST",
     "name": "Capital Trust Limited",
     "market": 8949.694005
    },
    {
     "number": 1671,
     "ticker": "MITCON",
     "name": "MITCON Consultancy & Engineering Services Limited",
     "market": 8925.31479
    },
    {
     "number": 1672,
     "ticker": "TIRUPATIFL",
     "name": "Tirupati Forge Limited",
     "market": 8918
    },
    {
     "number": 1673,
     "ticker": "IL&FSTRANS",
     "name": "IL&FS Transportation Networks Limited",
     "market": 8881.920729
    },
    {
     "number": 1674,
     "ticker": "SRPL",
     "name": "Shree Ram Proteins Limited",
     "market": 8835.75
    },
    {
     "number": 1675,
     "ticker": "SURYALAXMI",
     "name": "Suryalakshmi Cotton Mills Limited",
     "market": 8810.278365
    },
    {
     "number": 1676,
     "ticker": "CEREBRAINT",
     "name": "Cerebra Integrated Technologies Limited",
     "market": 8786.019945
    },
    {
     "number": 1677,
     "ticker": "KSHITIJPOL",
     "name": "Kshitij Polyline Limited",
     "market": 8737.526925
    },
    {
     "number": 1678,
     "ticker": "LAGNAM",
     "name": "Lagnam Spintex Limited",
     "market": 8728.486
    },
    {
     "number": 1679,
     "ticker": "ANLON",
     "name": "Anlon Technology Solutions Limited",
     "market": 8726.985
    },
    {
     "number": 1680,
     "ticker": "AMJLAND",
     "name": "Amj Land Holdings Limited",
     "market": 8692
    },
    {
     "number": 1681,
     "ticker": "BINANIIND",
     "name": "Binani Industries Limited",
     "market": 8688.430475
    },
    {
     "number": 1682,
     "ticker": "PROLIFE",
     "name": "Prolife Industries Limited",
     "market": 8638.5088
    },
    {
     "number": 1683,
     "ticker": "INCREDIBLE",
     "name": "INCREDIBLE INDUSTRIES LIMITED",
     "market": 8534.384375
    },
    {
     "number": 1684,
     "ticker": "SHAHALLOYS",
     "name": "Shah Alloys Limited",
     "market": 8512.9422
    },
    {
     "number": 1685,
     "ticker": "AMDIND",
     "name": "AMD Industries Limited",
     "market": 8510.036556000001
    },
    {
     "number": 1686,
     "ticker": "OMAXAUTO",
     "name": "Omax Autos Limited",
     "market": 8463.000348
    },
    {
     "number": 1687,
     "ticker": "TOKYOPLAST",
     "name": "Tokyo Plast International Limited",
     "market": 8446.7446
    },
    {
     "number": 1688,
     "ticker": "GROBTEA",
     "name": "The Grob Tea Company Limited",
     "market": 8443.746285
    },
    {
     "number": 1689,
     "ticker": "ANIKINDS",
     "name": "Anik Industries Limited",
     "market": 8423.183001
    },
    {
     "number": 1690,
     "ticker": "SURANASOL",
     "name": "Surana Solar Limited",
     "market": 8389.7253
    },
    {
     "number": 1691,
     "ticker": "FIDEL",
     "name": "Fidel Softech Limited",
     "market": 8387.8416
    },
    {
     "number": 1692,
     "ticker": "MAHASTEEL",
     "name": "Mahamaya Steel Industries Limited",
     "market": 8356.8924
    },
    {
     "number": 1693,
     "ticker": "AURDIS",
     "name": "Aurangabad Distillery Limited",
     "market": 8282
    },
    {
     "number": 1694,
     "ticker": "SIMBHALS",
     "name": "Simbhaoli Sugars Limited",
     "market": 8235.16449
    },
    {
     "number": 1695,
     "ticker": "GAL",
     "name": "Gyscoal Alloys Limited",
     "market": 8143.277562
    },
    {
     "number": 1696,
     "ticker": "GICL",
     "name": "Globe International Carriers Limited",
     "market": 8139.8925
    },
    {
     "number": 1697,
     "ticker": "KALYANIFRG",
     "name": "Kalyani Forge Limited",
     "market": 8109.102
    },
    {
     "number": 1698,
     "ticker": "HINDCON",
     "name": "Hindcon Chemicals Limited",
     "market": 8103.4759375
    },
    {
     "number": 1699,
     "ticker": "CORDSCABLE",
     "name": "Cords Cable Industries Limited",
     "market": 8099.25417
    },
    {
     "number": 1700,
     "ticker": "YAARI",
     "name": "Yaari Digital Integrated Services Limited",
     "market": 8005.8949
    },
    {
     "number": 1701,
     "ticker": "SONAMCLOCK",
     "name": "Sonam Clock Limited",
     "market": 7986.384
    },
    {
     "number": 1702,
     "ticker": "MAHICKRA",
     "name": "Mahickra Chemicals Limited",
     "market": 7959.7168
    },
    {
     "number": 1703,
     "ticker": "HPIL",
     "name": "Hindprakash Industries Limited",
     "market": 7917.111545
    },
    {
     "number": 1704,
     "ticker": "LPDC",
     "name": "Landmark Property Development Company Limited",
     "market": 7914.44644
    },
    {
     "number": 1705,
     "ticker": "DBSTOCKBRO",
     "name": "DB (International) Stock Brokers Limited",
     "market": 7892.5
    },
    {
     "number": 1706,
     "ticker": "AUSOMENT",
     "name": "Ausom Enterprise Limited",
     "market": 7765.42464
    },
    {
     "number": 1707,
     "ticker": "BALLARPUR",
     "name": "Ballarpur Industries Limited",
     "market": 7760.734536
    },
    {
     "number": 1708,
     "ticker": "AVSL",
     "name": "AVSL Industries Limited",
     "market": 7730.124
    },
    {
     "number": 1709,
     "ticker": "SPMLINFRA",
     "name": "SPML Infra Limited",
     "market": 7676.4863239999995
    },
    {
     "number": 1710,
     "ticker": "BANKA",
     "name": "Banka BioLoo Limited",
     "market": 7560.0676539999995
    },
    {
     "number": 1711,
     "ticker": "GOLDENTOBC",
     "name": "Golden Tobacco Limited",
     "market": 7554.176057999999
    },
    {
     "number": 1712,
     "ticker": "GTL",
     "name": "GTL Limited",
     "market": 7550.245488
    },
    {
     "number": 1713,
     "ticker": "ENERGYDEV",
     "name": "Energy Development Company Limited",
     "market": 7481.25
    },
    {
     "number": 1714,
     "ticker": "PANACHE",
     "name": "Panache Digilife Limited",
     "market": 7470
    },
    {
     "number": 1715,
     "ticker": "PIGL",
     "name": "Power & Instrumentation (Gujarat) Limited",
     "market": 7453.8961
    },
    {
     "number": 1716,
     "ticker": "DELTAMAGNT",
     "name": "Delta Manufacturing Limited",
     "market": 7443.86832
    },
    {
     "number": 1717,
     "ticker": "SHRADHA",
     "name": "Shradha Infraprojects Limited",
     "market": 7411.277472000001
    },
    {
     "number": 1718,
     "ticker": "PIONEEREMB",
     "name": "Pioneer Embroideries Limited",
     "market": 7389.988376
    },
    {
     "number": 1719,
     "ticker": "GLOBALVECT",
     "name": "Global Vectra Helicorp Limited",
     "market": 7378
    },
    {
     "number": 1720,
     "ticker": "BAGFILMS",
     "name": "B.A.G Films and Media Limited",
     "market": 7316.666713
    },
    {
     "number": 1721,
     "ticker": "WIPL",
     "name": "The Western India Plywoods Limited",
     "market": 7269.40671
    },
    {
     "number": 1722,
     "ticker": "NITIRAJ",
     "name": "Nitiraj Engineers Limited",
     "market": 7262.8335
    },
    {
     "number": 1723,
     "ticker": "BEARDSELL",
     "name": "Beardsell Limited",
     "market": 7249.544064
    },
    {
     "number": 1724,
     "ticker": "KRITIKA",
     "name": "Kritika Wires Limited",
     "market": 7233.94
    },
    {
     "number": 1725,
     "ticker": "PATINTLOG",
     "name": "Patel Integrated Logistics Limited",
     "market": 7103.65645
    },
    {
     "number": 1726,
     "ticker": "SETCO",
     "name": "Setco Automotive Limited",
     "market": 7089.665575
    },
    {
     "number": 1727,
     "ticker": "PRAENG",
     "name": "Prajay Engineers Syndicate Limited",
     "market": 7063.514891
    },
    {
     "number": 1728,
     "ticker": "ELECTHERM",
     "name": "Electrotherm (India) Limited",
     "market": 7034.0333279999995
    },
    {
     "number": 1729,
     "ticker": "UCL",
     "name": "Ushanti Colour Chem Limited",
     "market": 6979.40175
    },
    {
     "number": 1730,
     "ticker": "PRAKASHSTL",
     "name": "Prakash Steelage Limited",
     "market": 6912.515405
    },
    {
     "number": 1731,
     "ticker": "CINEVISTA",
     "name": "Cinevista Limited",
     "market": 6892.377
    },
    {
     "number": 1732,
     "ticker": "SUULD",
     "name": "Suumaya Industries Limited",
     "market": 6889.6894625
    },
    {
     "number": 1733,
     "ticker": "FLEXITUFF",
     "name": "Flexituff Ventures International Limited",
     "market": 6817.888844
    },
    {
     "number": 1734,
     "ticker": "MDL",
     "name": "Marvel Decor Limited",
     "market": 6816.056
    },
    {
     "number": 1735,
     "ticker": "HISARMETAL",
     "name": "Hisar Metal Industries Limited",
     "market": 6782.4
    },
    {
     "number": 1736,
     "ticker": "SUVIDHAA",
     "name": "Suvidhaa Infoserve Limited",
     "market": 6742.082425
    },
    {
     "number": 1737,
     "ticker": "BIOFILCHEM",
     "name": "Biofil Chemicals & Pharmaceuticals Limited",
     "market": 6737.3532
    },
    {
     "number": 1738,
     "ticker": "MARSHALL",
     "name": "Marshall Machines Limited",
     "market": 6722.1
    },
    {
     "number": 1739,
     "ticker": "ARIHANTACA",
     "name": "Arihant Academy Limited",
     "market": 6721.272
    },
    {
     "number": 1740,
     "ticker": "CELEBRITY",
     "name": "Celebrity Fashions Limited",
     "market": 6691.5603895
    },
    {
     "number": 1741,
     "ticker": "VIAZ",
     "name": "Viaz Tyres Limited",
     "market": 6652.293
    },
    {
     "number": 1742,
     "ticker": "DHRUV",
     "name": "Dhruv Consultancy Services Limited",
     "market": 6619.596
    },
    {
     "number": 1743,
     "ticker": "CENTEXT",
     "name": "Century Extrusions Limited",
     "market": 6600
    },
    {
     "number": 1744,
     "ticker": "DOLLEX",
     "name": "Dollex Agrotech Limited",
     "market": 6516.648
    },
    {
     "number": 1745,
     "ticker": "BHANDARI",
     "name": "Bhandari Hosiery Exports Limited",
     "market": 6373.922325
    },
    {
     "number": 1746,
     "ticker": "TREJHARA",
     "name": "TREJHARA SOLUTIONS LIMITED",
     "market": 6368.984622000001
    },
    {
     "number": 1747,
     "ticker": "FELIX",
     "name": "Felix Industries Limited",
     "market": 6363.7035
    },
    {
     "number": 1748,
     "ticker": "NGIL",
     "name": "Nakoda Group of Industries Limited",
     "market": 6360.583125
    },
    {
     "number": 1749,
     "ticker": "SUPREMEINF",
     "name": "Supreme Infrastructure India Limited",
     "market": 6360.34707
    },
    {
     "number": 1750,
     "ticker": "AGROPHOS",
     "name": "Agro Phos India Limited",
     "market": 6355.9350525
    },
    {
     "number": 1751,
     "ticker": "MCL",
     "name": "Madhav Copper Limited",
     "market": 6242.844
    },
    {
     "number": 1752,
     "ticker": "OILCOUNTUB",
     "name": "Oil Country Tubular Limited",
     "market": 6200.5342
    },
    {
     "number": 1753,
     "ticker": "UMA",
     "name": "Uma Converter Limited",
     "market": 6122.834372
    },
    {
     "number": 1754,
     "ticker": "MORARJEE",
     "name": "Morarjee Textiles Limited",
     "market": 6122.0008065
    },
    {
     "number": 1755,
     "ticker": "SRIVASAVI",
     "name": "Srivasavi Adhesive Tapes Limited",
     "market": 6094.89138
    },
    {
     "number": 1756,
     "ticker": "AAREYDRUGS",
     "name": "Aarey Drugs & Pharmaceuticals Limited",
     "market": 6092.32416
    },
    {
     "number": 1757,
     "ticker": "AAKASH",
     "name": "Aakash Exploration Services Limited",
     "market": 6024.375
    },
    {
     "number": 1758,
     "ticker": "VASWANI",
     "name": "Vaswani Industries Limited",
     "market": 6000
    },
    {
     "number": 1759,
     "ticker": "KANANIIND",
     "name": "Kanani Industries Limited",
     "market": 5936.04
    },
    {
     "number": 1760,
     "ticker": "ARCHIES",
     "name": "Archies Limited",
     "market": 5928.39
    },
    {
     "number": 1761,
     "ticker": "SHIVAMILLS",
     "name": "Shiva Mills Limited",
     "market": 5906.675767999999
    },
    {
     "number": 1762,
     "ticker": "IPSL",
     "name": "Integrated Personnel Services Limited",
     "market": 5873.30565
    },
    {
     "number": 1763,
     "ticker": "TREEHOUSE",
     "name": "Tree House Education & Accessories Limited",
     "market": 5838.879912
    },
    {
     "number": 1764,
     "ticker": "BDR",
     "name": "BDR Buildcon Limited",
     "market": 5824.3425
    },
    {
     "number": 1765,
     "ticker": "VERTEXPLUS",
     "name": "Vertexplus Technologies Limited",
     "market": 5783.7178
    },
    {
     "number": 1766,
     "ticker": "KEYFINSERV",
     "name": "Keynote Financial Services Limited",
     "market": 5779.6021665
    },
    {
     "number": 1767,
     "ticker": "KHFM",
     "name": "Khfm Hospitality And Facility Management Services Limited",
     "market": 5762.821925
    },
    {
     "number": 1768,
     "ticker": "AROGRANITE",
     "name": "Aro Granite Industries Limited",
     "market": 5752.8
    },
    {
     "number": 1769,
     "ticker": "SEYAIND",
     "name": "Seya Industries Limited",
     "market": 5739.23664
    },
    {
     "number": 1770,
     "ticker": "GIRIRAJ",
     "name": "Giriraj Civil Developers Limited",
     "market": 5709.616
    },
    {
     "number": 1771,
     "ticker": "RSSOFTWARE",
     "name": "R. S. Software (India) Limited",
     "market": 5707.246596
    },
    {
     "number": 1772,
     "ticker": "ORIENTLTD",
     "name": "Orient Press Limited",
     "market": 5670
    },
    {
     "number": 1773,
     "ticker": "EXCEL",
     "name": "Excel Realty N Infra Limited",
     "market": 5642.78024
    },
    {
     "number": 1774,
     "ticker": "RELIABLE",
     "name": "Reliable Data Services Limited",
     "market": 5572.8
    },
    {
     "number": 1775,
     "ticker": "AAATECH",
     "name": "AAA Technologies Limited",
     "market": 5566.8312
    },
    {
     "number": 1776,
     "ticker": "AGRITECH",
     "name": "Agri-Tech (India) Limited",
     "market": 5550.93
    },
    {
     "number": 1777,
     "ticker": "LGHL",
     "name": "Laxmi Goldorna House Limited",
     "market": 5531.0535
    },
    {
     "number": 1778,
     "ticker": "SHRENIK",
     "name": "Shrenik Limited",
     "market": 5508
    },
    {
     "number": 1779,
     "ticker": "ANKITMETAL",
     "name": "Ankit Metal & Power Limited",
     "market": 5503.3095
    },
    {
     "number": 1780,
     "ticker": "JETFREIGHT",
     "name": "Jet Freight Logistics Limited",
     "market": 5475.646512
    },
    {
     "number": 1781,
     "ticker": "VARDMNPOLY",
     "name": "Vardhman Polytex Limited",
     "market": 5472.4299435
    },
    {
     "number": 1782,
     "ticker": "NIRMAN",
     "name": "Nirman Agri Gentics Limited",
     "market": 5451.1516
    },
    {
     "number": 1783,
     "ticker": "SHREERAMA",
     "name": "Shree Rama Multi-Tech Limited",
     "market": 5426.5144275
    },
    {
     "number": 1784,
     "ticker": "SIDDHIKA",
     "name": "Siddhika Coatings Limited",
     "market": 5366.4615
    },
    {
     "number": 1785,
     "ticker": "BVCL",
     "name": "Barak Valley Cements Limited",
     "market": 5340.56
    },
    {
     "number": 1786,
     "ticker": "KKVAPOW",
     "name": "KKV Agro Powers Limited",
     "market": 5334.29375
    },
    {
     "number": 1787,
     "ticker": "HOVS",
     "name": "HOV Services Limited",
     "market": 5258.40081
    },
    {
     "number": 1788,
     "ticker": "AMBANIORG",
     "name": "Ambani Organics Limited",
     "market": 5210.45379
    },
    {
     "number": 1789,
     "ticker": "FSC",
     "name": "Future Supply Chain Solutions Limited",
     "market": 5178.264564
    },
    {
     "number": 1790,
     "ticker": "ABMINTLLTD",
     "name": "ABM International Limited",
     "market": 5169.696
    },
    {
     "number": 1791,
     "ticker": "SEPOWER",
     "name": "S.E. Power Limited",
     "market": 5157.47
    },
    {
     "number": 1792,
     "ticker": "BANARBEADS",
     "name": "Banaras Beads Limited",
     "market": 5143.07205
    },
    {
     "number": 1793,
     "ticker": "REGENCERAM",
     "name": "Regency Ceramics Limited",
     "market": 5129.667684
    },
    {
     "number": 1794,
     "ticker": "PODDARHOUS",
     "name": "Poddar Housing and Development Limited",
     "market": 5124.9471
    },
    {
     "number": 1795,
     "ticker": "PENTAGOLD",
     "name": "Penta Gold Limited",
     "market": 5064.55
    },
    {
     "number": 1796,
     "ticker": "PARTYCRUS",
     "name": "Party Cruisers Limited",
     "market": 4944.8
    },
    {
     "number": 1797,
     "ticker": "SONAHISONA",
     "name": "Sona Hi Sona Jewellers (Gujarat) Limited",
     "market": 4859.358825
    },
    {
     "number": 1798,
     "ticker": "MALUPAPER",
     "name": "Malu Paper Mills Limited",
     "market": 4853.356625
    },
    {
     "number": 1799,
     "ticker": "MOKSH",
     "name": "Moksh Ornaments Limited",
     "market": 4775.744895
    },
    {
     "number": 1800,
     "ticker": "PULZ",
     "name": "Pulz Electronics Limited",
     "market": 4770.5
    },
    {
     "number": 1801,
     "ticker": "RBMINFRA",
     "name": "Rbm Infracon Limited",
     "market": 4769.165
    },
    {
     "number": 1802,
     "ticker": "ZENITHSTL",
     "name": "Zenith Steel Pipes & Industries Limited",
     "market": 4766.395008
    },
    {
     "number": 1803,
     "ticker": "NIDAN",
     "name": "Nidan Laboratories and Healthcare Limited",
     "market": 4705.15
    },
    {
     "number": 1804,
     "ticker": "SAMBHAAV",
     "name": "Sambhaav Media Limited",
     "market": 4682.21558
    },
    {
     "number": 1805,
     "ticker": "UWCSL",
     "name": "Ultra Wiring Connectivity System Limited",
     "market": 4657.196045
    },
    {
     "number": 1806,
     "ticker": "BANG",
     "name": "Bang Overseas Limited",
     "market": 4644.3
    },
    {
     "number": 1807,
     "ticker": "MRO",
     "name": "M.R. Organisation Limited",
     "market": 4624.9125
    },
    {
     "number": 1808,
     "ticker": "MINDPOOL",
     "name": "Mindpool Technologies Limited",
     "market": 4604.04375
    },
    {
     "number": 1809,
     "ticker": "TAPIFRUIT",
     "name": "Tapi Fruit Processing Limited",
     "market": 4588.57875
    },
    {
     "number": 1810,
     "ticker": "ABCOTS",
     "name": "A B Cotspin India Limited",
     "market": 4528.568
    },
    {
     "number": 1811,
     "ticker": "PNC",
     "name": "Pritish Nandy Communications Limited",
     "market": 4477.5365
    },
    {
     "number": 1812,
     "ticker": "SURANI",
     "name": "Surani Steel Tubes Limited",
     "market": 4444.366
    },
    {
     "number": 1813,
     "ticker": "PRECISION",
     "name": "Precision Metaliks Limited",
     "market": 4422.465952
    },
    {
     "number": 1814,
     "ticker": "TIMESGTY",
     "name": "Times Guaranty Limited",
     "market": 4411.1395845
    },
    {
     "number": 1815,
     "ticker": "MANUGRAPH",
     "name": "Manugraph India Limited",
     "market": 4379.768784
    },
    {
     "number": 1816,
     "ticker": "ZENITHEXPO",
     "name": "Zenith Exports Limited",
     "market": 4263.0375
    },
    {
     "number": 1817,
     "ticker": "AARVEEDEN",
     "name": "Aarvee Denims & Exports Limited",
     "market": 4257.9537
    },
    {
     "number": 1818,
     "ticker": "SOMICONVEY",
     "name": "Somi Conveyor Beltings Limited",
     "market": 4240.67616
    },
    {
     "number": 1819,
     "ticker": "DKEGL",
     "name": "D.K. Enterprises Global Limited",
     "market": 4204.48
    },
    {
     "number": 1820,
     "ticker": "ARHAM",
     "name": "Arham Technologies Limited",
     "market": 4187.7
    },
    {
     "number": 1821,
     "ticker": "TIMESCAN",
     "name": "Timescan Logistics (India) Limited",
     "market": 4166.595
    },
    {
     "number": 1822,
     "ticker": "SGL",
     "name": "STL Global Limited",
     "market": 4143.105299
    },
    {
     "number": 1823,
     "ticker": "WEWIN",
     "name": "WE WIN LIMITED",
     "market": 4125.366
    },
    {
     "number": 1824,
     "ticker": "CMRSL",
     "name": "Cyber Media Research & Services Limited",
     "market": 4113.84
    },
    {
     "number": 1825,
     "ticker": "SONUINFRA",
     "name": "Sonu Infratech Limited",
     "market": 4089.85
    },
    {
     "number": 1826,
     "ticker": "VIVIANA",
     "name": "Viviana Power Tech Limited",
     "market": 4077.51
    },
    {
     "number": 1827,
     "ticker": "AKASH",
     "name": "Akash Infra-Projects Limited",
     "market": 3996.4205580000003
    },
    {
     "number": 1828,
     "ticker": "INDSWFTLTD",
     "name": "Ind-Swift Limited",
     "market": 3981.1019955
    },
    {
     "number": 1829,
     "ticker": "KARMAENG",
     "name": "Karma Energy Limited",
     "market": 3974.266833
    },
    {
     "number": 1830,
     "ticker": "NAGREEKEXP",
     "name": "Nagreeka Exports Limited",
     "market": 3956.15505
    },
    {
     "number": 1831,
     "ticker": "BURNPUR",
     "name": "Burnpur Cement Limited",
     "market": 3918.6585164999997
    },
    {
     "number": 1832,
     "ticker": "NIBL",
     "name": "NRB Industrial Bearings Limited",
     "market": 3889.019325
    },
    {
     "number": 1833,
     "ticker": "CUBEXTUB",
     "name": "Cubex Tubings Limited",
     "market": 3880.442225
    },
    {
     "number": 1834,
     "ticker": "AISL",
     "name": "ANI Integrated Services Limited",
     "market": 3874.88
    },
    {
     "number": 1835,
     "ticker": "SHAIVAL",
     "name": "Shaival Reality Limited",
     "market": 3825.207
    },
    {
     "number": 1836,
     "ticker": "VINEETLAB",
     "name": "Vineet Laboratories Limited",
     "market": 3816.669312
    },
    {
     "number": 1837,
     "ticker": "ARISTO",
     "name": "Aristo Bio-Tech And Lifescience Limited",
     "market": 3815.7719
    },
    {
     "number": 1838,
     "ticker": "TERASOFT",
     "name": "Tera Software Limited",
     "market": 3691.003125
    },
    {
     "number": 1839,
     "ticker": "CROWN",
     "name": "Crown Lifters Limited",
     "market": 3690.345
    },
    {
     "number": 1840,
     "ticker": "JFLLIFE",
     "name": "Jfl Life Sciences Limited",
     "market": 3629.48553
    },
    {
     "number": 1841,
     "ticker": "GLOBE",
     "name": "Globe Textiles (India) Limited",
     "market": 3627.396
    },
    {
     "number": 1842,
     "ticker": "3PLAND",
     "name": "3P Land Holdings Limited",
     "market": 3618
    },
    {
     "number": 1843,
     "ticker": "VERA",
     "name": "Vera Synthetic Limited",
     "market": 3614.8875
    },
    {
     "number": 1844,
     "ticker": "MILTON",
     "name": "Milton Industries Limited",
     "market": 3577.4475
    },
    {
     "number": 1845,
     "ticker": "ADROITINFO",
     "name": "Adroit Infotech Limited",
     "market": 3571.2712260000003
    },
    {
     "number": 1846,
     "ticker": "SHUBHLAXMI",
     "name": "Shubhlaxmi Jewel Art Limited",
     "market": 3565.62
    },
    {
     "number": 1847,
     "ticker": "AGNI",
     "name": "Agni Green Power Limited",
     "market": 3535.7988
    },
    {
     "number": 1848,
     "ticker": "LFIC",
     "name": "Lakshmi Finance & Industrial Corporation Limited",
     "market": 3525
    },
    {
     "number": 1849,
     "ticker": "VSCL",
     "name": "Vadivarhe Speciality Chemicals Limited",
     "market": 3521.647625
    },
    {
     "number": 1850,
     "ticker": "MADHAV",
     "name": "Madhav Marbles and Granites Limited",
     "market": 3507.224
    },
    {
     "number": 1851,
     "ticker": "UJAAS",
     "name": "Ujaas Energy Limited",
     "market": 3505.075
    },
    {
     "number": 1852,
     "ticker": "SUPERSPIN",
     "name": "Super Spinning Mills Limited",
     "market": 3492.5
    },
    {
     "number": 1853,
     "ticker": "RKDL",
     "name": "Ravi Kumar Distilleries Limited",
     "market": 3492
    },
    {
     "number": 1854,
     "ticker": "AMBICAAGAR",
     "name": "Ambica Agarbathies & Aroma industries Limited",
     "market": 3487.0122
    },
    {
     "number": 1855,
     "ticker": "ACEINTEG",
     "name": "Ace Integrated Solutions Limited",
     "market": 3478.2
    },
    {
     "number": 1856,
     "ticker": "OMFURN",
     "name": "Omfurn India Limited",
     "market": 3474.12
    },
    {
     "number": 1857,
     "ticker": "SWARAJ",
     "name": "Swaraj Suiting Limited",
     "market": 3470.46266
    },
    {
     "number": 1858,
     "ticker": "AJOONI",
     "name": "Ajooni Biotech Limited",
     "market": 3460.7419795
    },
    {
     "number": 1859,
     "ticker": "KHANDSE",
     "name": "Khandwala Securities Limited",
     "market": 3447.35993
    },
    {
     "number": 1860,
     "ticker": "SAGARDEEP",
     "name": "Sagardeep Alloys Limited",
     "market": 3437.0661
    },
    {
     "number": 1861,
     "ticker": "REXPIPES",
     "name": "Rex Pipes And Cables Industries Limited",
     "market": 3375.5
    },
    {
     "number": 1862,
     "ticker": "ADL",
     "name": "Archidply Decor Limited",
     "market": 3328.6175
    },
    {
     "number": 1863,
     "ticker": "MCON",
     "name": "Mcon Rasayan India Limited",
     "market": 3300.013125
    },
    {
     "number": 1864,
     "ticker": "CADSYS",
     "name": "Cadsys (India) Limited",
     "market": 3286.095
    },
    {
     "number": 1865,
     "ticker": "HBSL",
     "name": "HB Stockholdings Limited",
     "market": 3279.7570675
    },
    {
     "number": 1866,
     "ticker": "SANGINITA",
     "name": "Sanginita Chemicals Limited",
     "market": 3272.22915
    },
    {
     "number": 1867,
     "ticker": "GANGAFORGE",
     "name": "Ganga Forging Limited",
     "market": 3231.914505
    },
    {
     "number": 1868,
     "ticker": "ABINFRA",
     "name": "A B Infrabuild Limited",
     "market": 3211.7048145
    },
    {
     "number": 1869,
     "ticker": "PERFECT",
     "name": "Perfect Infraengineers Limited",
     "market": 3153.17673
    },
    {
     "number": 1870,
     "ticker": "NARMADA",
     "name": "Narmada Agrobase Limited",
     "market": 3109.4298630000003
    },
    {
     "number": 1871,
     "ticker": "RMDRIP",
     "name": "R M Drip and Sprinklers Systems Limited",
     "market": 3077.4
    },
    {
     "number": 1872,
     "ticker": "NAGREEKCAP",
     "name": "Nagreeka Capital & Infrastructure Limited",
     "market": 3059.21025
    },
    {
     "number": 1873,
     "ticker": "LAXMICOT",
     "name": "Laxmi Cotspin Limited",
     "market": 3052.28526
    },
    {
     "number": 1874,
     "ticker": "PEARLPOLY",
     "name": "Pearl Polymers Limited",
     "market": 3038.705226
    },
    {
     "number": 1875,
     "ticker": "HECPROJECT",
     "name": "HEC Infra Projects Limited",
     "market": 2945.13548
    },
    {
     "number": 1876,
     "ticker": "SANWARIA",
     "name": "Sanwaria Consumer Limited",
     "market": 2944.4
    },
    {
     "number": 1877,
     "ticker": "MEGAFLEX",
     "name": "Mega Flex Plastics Limited",
     "market": 2901.15675
    },
    {
     "number": 1878,
     "ticker": "GISOLUTION",
     "name": "GI Engineering Solutions Limited",
     "market": 2882.8193010000005
    },
    {
     "number": 1879,
     "ticker": "PARASPETRO",
     "name": "Paras Petrofils Limited",
     "market": 2840.8785
    },
    {
     "number": 1880,
     "ticker": "RITEZONE",
     "name": "Rite Zone Chemcon India Limited",
     "market": 2834.2809
    },
    {
     "number": 1881,
     "ticker": "HEADSUP",
     "name": "Heads UP Ventures Limited",
     "market": 2804.491343
    },
    {
     "number": 1882,
     "ticker": "VCL",
     "name": "Vaxtex Cotfab Limited",
     "market": 2778.3822
    },
    {
     "number": 1883,
     "ticker": "PRITIKA",
     "name": "Pritika Engineering Components Limited",
     "market": 2764.15881
    },
    {
     "number": 1884,
     "ticker": "KEEPLEARN",
     "name": "DSJ Keep Learning Limited",
     "market": 2759.0234805
    },
    {
     "number": 1885,
     "ticker": "COUNCODOS",
     "name": "Country Condo's Limited",
     "market": 2754.70415
    },
    {
     "number": 1886,
     "ticker": "ROLTA",
     "name": "Rolta India Limited",
     "market": 2737.2073575
    },
    {
     "number": 1887,
     "ticker": "DHARSUGAR",
     "name": "Dharani Sugars & Chemicals Limited",
     "market": 2722.4
    },
    {
     "number": 1888,
     "ticker": "ASLIND",
     "name": "ASL Industries Limited",
     "market": 2708.4434
    },
    {
     "number": 1889,
     "ticker": "AGARWALFT",
     "name": "Agarwal Float Glass India Limited",
     "market": 2680.09056
    },
    {
     "number": 1890,
     "ticker": "NEXTMEDIA",
     "name": "Next Mediaworks Limited",
     "market": 2675.71632
    },
    {
     "number": 1891,
     "ticker": "RICHA",
     "name": "Richa Info Systems Limited",
     "market": 2673
    },
    {
     "number": 1892,
     "ticker": "DNAMEDIA",
     "name": "Diligent Media Corporation Limited",
     "market": 2648.430405
    },
    {
     "number": 1893,
     "ticker": "AMEYA",
     "name": "Ameya Precision Engineers Limited",
     "market": 2643.75
    },
    {
     "number": 1894,
     "ticker": "DYNAMIC",
     "name": "Dynamic Services & Security Limited",
     "market": 2636.04744
    },
    {
     "number": 1895,
     "ticker": "LIBAS",
     "name": "Libas Consumer Products Limited",
     "market": 2634.458
    },
    {
     "number": 1896,
     "ticker": "JETKNIT",
     "name": "Jet Knitwears Limited",
     "market": 2625.4976
    },
    {
     "number": 1897,
     "ticker": "BALKRISHNA",
     "name": "Balkrishna Paper Mills Limited",
     "market": 2588.302404
    },
    {
     "number": 1898,
     "ticker": "MTEDUCARE",
     "name": "MT Educare Limited",
     "market": 2564.095917
    },
    {
     "number": 1899,
     "ticker": "GODHA",
     "name": "Godha Cabcon & Insulation Limited",
     "market": 2553.92
    },
    {
     "number": 1900,
     "ticker": "GOENKA",
     "name": "Goenka Diamond and Jewels Limited",
     "market": 2536
    },
    {
     "number": 1901,
     "ticker": "HAVISHA",
     "name": "Sri Havisha Hospitality and Infrastructure Limited",
     "market": 2533.3407
    },
    {
     "number": 1902,
     "ticker": "QUADPRO",
     "name": "Quadpro Ites Limited",
     "market": 2527.5
    },
    {
     "number": 1903,
     "ticker": "QFIL",
     "name": "Quality Foils (India) Limited",
     "market": 2510.093
    },
    {
     "number": 1904,
     "ticker": "MADHUCON",
     "name": "Madhucon Projects Limited",
     "market": 2509.02796
    },
    {
     "number": 1905,
     "ticker": "ROLLT",
     "name": "Rollatainers Limited",
     "market": 2501.3
    },
    {
     "number": 1906,
     "ticker": "CYBERMEDIA",
     "name": "Cyber Media (India) Limited",
     "market": 2467.590615
    },
    {
     "number": 1907,
     "ticker": "JAKHARIA",
     "name": "JAKHARIA FABRIC LIMITED",
     "market": 2438.298
    },
    {
     "number": 1908,
     "ticker": "VEEKAYEM",
     "name": "Veekayem Fashion and Apparels Limited",
     "market": 2359.105595
    },
    {
     "number": 1909,
     "ticker": "TGBHOTELS",
     "name": "TGB Banquets And Hotels Limited",
     "market": 2342.912
    },
    {
     "number": 1910,
     "ticker": "VIVIDHA",
     "name": "Visagar Polytex Limited",
     "market": 2341.604272
    },
    {
     "number": 1911,
     "ticker": "FMNL",
     "name": "Future Market Networks Limited",
     "market": 2301.77524
    },
    {
     "number": 1912,
     "ticker": "WALPAR",
     "name": "Walpar Nutritions Limited",
     "market": 2293.3161
    },
    {
     "number": 1913,
     "ticker": "DESTINY",
     "name": "Destiny Logistics & Infra Limited",
     "market": 2292.812
    },
    {
     "number": 1914,
     "ticker": "SUMEETINDS",
     "name": "Sumeet Industries Limited",
     "market": 2280.1325580000002
    },
    {
     "number": 1915,
     "ticker": "ICDSLTD",
     "name": "ICDS Limited",
     "market": 2279.6725
    },
    {
     "number": 1916,
     "ticker": "LRRPL",
     "name": "Lead Reclaim And Rubber Products Limited",
     "market": 2228.1983625
    },
    {
     "number": 1917,
     "ticker": "MPTODAY",
     "name": "Madhya Pradesh Today Media Limited",
     "market": 2220.048
    },
    {
     "number": 1918,
     "ticker": "21STCENMGM",
     "name": "21st Century Management Services Limited",
     "market": 2184
    },
    {
     "number": 1919,
     "ticker": "HYBRIDFIN",
     "name": "Hybrid Financial Services Limited",
     "market": 2178.28435
    },
    {
     "number": 1920,
     "ticker": "SABAR",
     "name": "Sabar Flex India Limited",
     "market": 2177.546218
    },
    {
     "number": 1921,
     "ticker": "TFL",
     "name": "Transwarranty Finance Limited",
     "market": 2176.9905519999998
    },
    {
     "number": 1922,
     "ticker": "IMPEXFERRO",
     "name": "Impex Ferro Tech Limited",
     "market": 2154.324298
    },
    {
     "number": 1923,
     "ticker": "INFOMEDIA",
     "name": "Infomedia Press Limited",
     "market": 2133.25231
    },
    {
     "number": 1924,
     "ticker": "NKIND",
     "name": "NK Industries Limited",
     "market": 2121.4947
    },
    {
     "number": 1925,
     "ticker": "SHANTI",
     "name": "Shanti Overseas (India) Limited",
     "market": 2060.163
    },
    {
     "number": 1926,
     "ticker": "GRCL",
     "name": "Gayatri Rubbers And Chemicals Limited",
     "market": 2059.942
    },
    {
     "number": 1927,
     "ticker": "FEL",
     "name": "Future Enterprises Limited",
     "market": 2047.1868044999999
    },
    {
     "number": 1928,
     "ticker": "THOMASCOTT",
     "name": "Thomas Scott (India) Limited",
     "market": 2034.8143380000001
    },
    {
     "number": 1929,
     "ticker": "KHAITANLTD",
     "name": "Khaitan (India) Limited",
     "market": 2023.5
    },
    {
     "number": 1930,
     "ticker": "WILLAMAGOR",
     "name": "Williamson Magor & Company Limited",
     "market": 1972.1448
    },
    {
     "number": 1931,
     "ticker": "LCCINFOTEC",
     "name": "LCC Infotech Limited",
     "market": 1962.196925
    },
    {
     "number": 1932,
     "ticker": "UNIINFO",
     "name": "Uniinfo Telecom Services Limited",
     "market": 1962.18752
    },
    {
     "number": 1933,
     "ticker": "ASMS",
     "name": "Bartronics India Limited",
     "market": 1949.291136
    },
    {
     "number": 1934,
     "ticker": "VIVO",
     "name": "Vivo Collaboration Solutions Limited",
     "market": 1803.425
    },
    {
     "number": 1935,
     "ticker": "GAYAHWS",
     "name": "Gayatri Highways Limited",
     "market": 1797.38925
    },
    {
     "number": 1936,
     "ticker": "CALSOFT",
     "name": "California Software Company Limited",
     "market": 1785.2957430000001
    },
    {
     "number": 1937,
     "ticker": "MOXSH",
     "name": "Moxsh Overseas Educon Limited",
     "market": 1770.232
    },
    {
     "number": 1938,
     "ticker": "ORIENTALTL",
     "name": "Oriental Trimex Limited",
     "market": 1764.17436
    },
    {
     "number": 1939,
     "ticker": "ONELIFECAP",
     "name": "Onelife Capital Advisors Limited",
     "market": 1763.52
    },
    {
     "number": 1940,
     "ticker": "VIJIFIN",
     "name": "Viji Finance Limited",
     "market": 1732.5
    },
    {
     "number": 1941,
     "ticker": "DIGJAMLMTD",
     "name": "Digjam Limited",
     "market": 1664
    },
    {
     "number": 1942,
     "ticker": "KRIDHANINF",
     "name": "Kridhan Infra Limited",
     "market": 1658.6360875
    },
    {
     "number": 1943,
     "ticker": "SILLYMONKS",
     "name": "Silly Monks Entertainment Limited",
     "market": 1633.808
    },
    {
     "number": 1944,
     "ticker": "MAKS",
     "name": "Maks Energy Solutions India Limited",
     "market": 1629.67565
    },
    {
     "number": 1945,
     "ticker": "TANTIACONS",
     "name": "Tantia Constructions Limited",
     "market": 1628.195209
    },
    {
     "number": 1946,
     "ticker": "SUPREMEENG",
     "name": "Supreme Engineering Limited",
     "market": 1624.675
    },
    {
     "number": 1947,
     "ticker": "SILGO",
     "name": "Silgo Retail Limited",
     "market": 1596.985
    },
    {
     "number": 1948,
     "ticker": "MOHITIND",
     "name": "Mohit Industries Limited",
     "market": 1592.7271875
    },
    {
     "number": 1949,
     "ticker": "EDUCOMP",
     "name": "Educomp Solutions Limited",
     "market": 1592.073184
    },
    {
     "number": 1950,
     "ticker": "EASTSILK",
     "name": "Eastern Silk Industries Limited",
     "market": 1539.57609
    },
    {
     "number": 1951,
     "ticker": "KANDARP",
     "name": "Kandarp Digi Smart BPO Limited",
     "market": 1525.41
    },
    {
     "number": 1952,
     "ticker": "CMICABLES",
     "name": "CMI Limited",
     "market": 1498.5672295
    },
    {
     "number": 1953,
     "ticker": "NATNLSTEEL",
     "name": "National Steel And Agro Industries Limited",
     "market": 1446.25
    },
    {
     "number": 1954,
     "ticker": "MITTAL",
     "name": "Mittal Life Style Limited",
     "market": 1441.1742319999998
    },
    {
     "number": 1955,
     "ticker": "SPRL",
     "name": "Sp Refractories Limited",
     "market": 1431.6
    },
    {
     "number": 1956,
     "ticker": "ORTINLAB",
     "name": "Ortin Laboratories Limited",
     "market": 1427.059296
    },
    {
     "number": 1957,
     "ticker": "BRIGHT",
     "name": "Bright Solar Limited",
     "market": 1383.7999815
    },
    {
     "number": 1958,
     "ticker": "KAUSHALYA",
     "name": "Kaushalya Infrastructure Development Corporation Limited",
     "market": 1367.909885
    },
    {
     "number": 1959,
     "ticker": "GUJRAFFIA",
     "name": "Gujarat Raffia Industries Limited",
     "market": 1351.125
    },
    {
     "number": 1960,
     "ticker": "MASKINVEST",
     "name": "Mask Investments Limited",
     "market": 1335.03125
    },
    {
     "number": 1961,
     "ticker": "ISHAN",
     "name": "Ishan International Limited",
     "market": 1297.41174
    },
    {
     "number": 1962,
     "ticker": "CONTI",
     "name": "Continental Seeds and Chemicals Limited",
     "market": 1275.35802
    },
    {
     "number": 1963,
     "ticker": "AMIABLE",
     "name": "Amiable Logistics (India) Limited",
     "market": 1261.3263
    },
    {
     "number": 1964,
     "ticker": "AILIMITED",
     "name": "Abhishek Integrations Limited",
     "market": 1232.9164575
    },
    {
     "number": 1965,
     "ticker": "EUROTEXIND",
     "name": "Eurotex Industries and Exports Limited",
     "market": 1216.231235
    },
    {
     "number": 1966,
     "ticker": "TIJARIA",
     "name": "Tijaria Polypipes Limited",
     "market": 1202.316318
    },
    {
     "number": 1967,
     "ticker": "TNTELE",
     "name": "Tamilnadu Telecommunication Limited",
     "market": 1200.7309
    },
    {
     "number": 1968,
     "ticker": "KALYANI",
     "name": "Kalyani Commercials Limited",
     "market": 1193
    },
    {
     "number": 1969,
     "ticker": "SETUINFRA",
     "name": "Setubandhan Infrastructure Limited",
     "market": 1131.10434
    },
    {
     "number": 1970,
     "ticker": "GRETEX",
     "name": "Gretex Industries Limited",
     "market": 1126.603
    },
    {
     "number": 1971,
     "ticker": "LYPSAGEMS",
     "name": "Lypsa Gems & Jewellery Limited",
     "market": 1090.908
    },
    {
     "number": 1972,
     "ticker": "METALFORGE",
     "name": "Metalyst Forgings Limited",
     "market": 1088.75
    },
    {
     "number": 1973,
     "ticker": "SSINFRA",
     "name": "S.S. Infrastructure Development Consultants Limited",
     "market": 1084.031775
    },
    {
     "number": 1974,
     "ticker": "SMVD",
     "name": "SMVD Poly Pack Limited",
     "market": 1053.16134
    },
    {
     "number": 1975,
     "ticker": "RMCL",
     "name": "Radha Madhav Corporation Limited",
     "market": 1036.1073
    },
    {
     "number": 1976,
     "ticker": "JALAN",
     "name": "Jalan Transolutions (India) Limited",
     "market": 1024.87401
    },
    {
     "number": 1977,
     "ticker": "SANCO",
     "name": "Sanco Industries Limited",
     "market": 994.232
    },
    {
     "number": 1978,
     "ticker": "VASA",
     "name": "Vasa Retail and Overseas Ltd",
     "market": 955.811725
    },
    {
     "number": 1979,
     "ticker": "KAVVERITEL",
     "name": "Kavveri Telecom Products Limited",
     "market": 945.84022
    },
    {
     "number": 1980,
     "ticker": "TECHIN",
     "name": "Techindia Nirman Limited",
     "market": 945.516
    },
    {
     "number": 1981,
     "ticker": "NORBTEAEXP",
     "name": "Norben Tea & Exports Limited",
     "market": 940
    },
    {
     "number": 1982,
     "ticker": "KCK",
     "name": "Kck Industries Limited",
     "market": 907.5
    },
    {
     "number": 1983,
     "ticker": "SPENTEX",
     "name": "Spentex Industries Limited",
     "market": 897.72035
    },
    {
     "number": 1984,
     "ticker": "CREATIVEYE",
     "name": "Creative Eye Limited",
     "market": 872.533875
    },
    {
     "number": 1985,
     "ticker": "ANTGRAPHIC",
     "name": "Antarctica Limited",
     "market": 852.5528
    },
    {
     "number": 1986,
     "ticker": "TVVISION",
     "name": "TV Vision Limited",
     "market": 845.1235
    },
    {
     "number": 1987,
     "ticker": "ABNINT",
     "name": "A B N Intercorp Limited",
     "market": 839.064
    },
    {
     "number": 1988,
     "ticker": "ARENTERP",
     "name": "Rajdarshan Industries Limited",
     "market": 836.1327
    },
    {
     "number": 1989,
     "ticker": "UMESLTD",
     "name": "Usha Martin Education & Solutions Limited",
     "market": 832.0980465
    },
    {
     "number": 1990,
     "ticker": "SHYAMTEL",
     "name": "Shyam Telecom Limited",
     "market": 811.44
    },
    {
     "number": 1991,
     "ticker": "MANAV",
     "name": "Manav Infra Projects Limited",
     "market": 799.812
    },
    {
     "number": 1992,
     "ticker": "ACCORD",
     "name": "Accord Synergy Limited",
     "market": 746.48
    },
    {
     "number": 1993,
     "ticker": "DRL",
     "name": "Dhanuka Realty Limited",
     "market": 735.3038
    },
    {
     "number": 1994,
     "ticker": "GLFL",
     "name": "Gujarat Lease Financing Limited",
     "market": 678.144175
    },
    {
     "number": 1995,
     "ticker": "CMMIPL",
     "name": "CMM Infraprojects Limited",
     "market": 673.95018
    },
    {
     "number": 1996,
     "ticker": "NIRAJISPAT",
     "name": "Niraj Ispat Industries Limited",
     "market": 672
    },
    {
     "number": 1997,
     "ticker": "DCMFINSERV",
     "name": "DCM Financial Services Limited",
     "market": 666.7605385
    },
    {
     "number": 1998,
     "ticker": "SRIRAM",
     "name": "Shri Ram Switchgears Limited",
     "market": 600.6339
    },
    {
     "number": 1999,
     "ticker": "PREMIER",
     "name": "Premier Limited",
     "market": 592.265115
    },
    {
     "number": 2000,
     "ticker": "SKSTEXTILE",
     "name": "SKS Textiles Limited",
     "market": 588.3283785
    },
    {
     "number": 2001,
     "ticker": "SABTN",
     "name": "Sri Adhikari Brothers Television Network Limited",
     "market": 576.58425
    },
    {
     "number": 2002,
     "ticker": "TARAPUR",
     "name": "Tarapur Transformers Limited",
     "market": 546.000308
    },
    {
     "number": 2003,
     "ticker": "BKMINDST",
     "name": "Bkm Industries Limited",
     "market": 524.2724
    },
    {
     "number": 2004,
     "ticker": "ALPSINDUS",
     "name": "Alps Industries Limited",
     "market": 508.4833
    },
    {
     "number": 2005,
     "ticker": "AHIMSA",
     "name": "Ahimsa Industries Limited",
     "market": 476.23713
    },
    {
     "number": 2006,
     "ticker": "BHALCHANDR",
     "name": "Bhalchandram Clothing Limited",
     "market": 476
    },
    {
     "number": 2007,
     "ticker": "INNOVATIVE",
     "name": "Innovative Tyres and Tubes Limited",
     "market": 422.8016835
    },
    {
     "number": 2008,
     "ticker": "LAKPRE",
     "name": "Lakshmi Precision Screws Limited",
     "market": 393.900012
    },
    {
     "number": 2009,
     "ticker": "TRANSWIND",
     "name": "Transwind Infrastructures Limited",
     "market": 367.895
    },
    {
     "number": 2010,
     "ticker": "MELSTAR",
     "name": "Melstar Information Technologies Limited",
     "market": 335.65376649999996
    },
    {
     "number": 2011,
     "ticker": "SABEVENTS",
     "name": "Sab Events & Governance Now Media Limited",
     "market": 319.75318550000003
    },
    {
     "number": 2012,
     "ticker": "INDLMETER",
     "name": "IMP Powers Limited",
     "market": 259.09689
    },
    {
     "number": 2013,
     "ticker": "TECILCHEM",
     "name": "TECIL Chemicals and Hydro Power Limited",
     "market": 189.637
    },
    {
     "number": 2014,
     "ticker": "ABHISHEK",
     "name": "Abhishek Corporation Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2015,
     "ticker": "AHLWEST",
     "name": "Asian Hotels (West) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2016,
     "ticker": "AIFL",
     "name": "Ashapura Intimates Fashion Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2017,
     "ticker": "AJRINFRA",
     "name": "AJR Infra And Tolling Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2018,
     "ticker": "ALCHEM",
     "name": "Alchemist Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2019,
     "ticker": "AMJUMBO",
     "name": "A And M Jumbo Bags Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2020,
     "ticker": "ANDHRACEMT",
     "name": "Andhra Cements Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2021,
     "ticker": "ANSALAPI",
     "name": "Ansal Properties & Infrastructure Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2022,
     "ticker": "ARCOTECH",
     "name": "Arcotech Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2023,
     "ticker": "ARSSINFRA",
     "name": "Arss Infrastructure Projects Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2024,
     "ticker": "ARTEDZ",
     "name": "Artedz Fabs Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2025,
     "ticker": "ASIL",
     "name": "Amit Spinning Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2026,
     "ticker": "ATCOM",
     "name": "Atcom Technologies Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2027,
     "ticker": "ATLASCYCLE",
     "name": "Atlas Cycles (Haryana) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2028,
     "ticker": "ATNINTER",
     "name": "ATN International Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2029,
     "ticker": "AUTOLITIND",
     "name": "Autolite (India) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2030,
     "ticker": "AUTORIDFIN",
     "name": "Autoriders Finance Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2031,
     "ticker": "BANSAL",
     "name": "Bansal Multiflex Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2032,
     "ticker": "BGLOBAL",
     "name": "Bharatiya Global Infomedia Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2033,
     "ticker": "BHARATIDIL",
     "name": "Bharati Defence and Infrastructure Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2034,
     "ticker": "BILENERGY",
     "name": "Bil Energy Systems Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2035,
     "ticker": "BIRLATYRE",
     "name": "Birla Tyres Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2036,
     "ticker": "BLUEBLENDS",
     "name": "Blue Blends (I) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2037,
     "ticker": "BLUECHIP",
     "name": "Blue Chip India Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2038,
     "ticker": "BLUECOAST",
     "name": "Blue Coast Hotels Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2039,
     "ticker": "BRFL",
     "name": "Bombay Rayon Fashions Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2040,
     "ticker": "CANDC",
     "name": "C & C Constructions Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2041,
     "ticker": "CCCL",
     "name": "Consolidated Construction Consortium Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2042,
     "ticker": "CELESTIAL",
     "name": "Celestial Biolabs Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2043,
     "ticker": "CKFSL",
     "name": "Cox & Kings Financial Service Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2044,
     "ticker": "DFMFOODS",
     "name": "DFM Foods Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2045,
     "ticker": "DIAPOWER",
     "name": "Diamond Power Infra Ltd",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2046,
     "ticker": "DOLPHINOFF",
     "name": "Dolphin Offshore Enterprises (India) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2047,
     "ticker": "DQE",
     "name": "DQ Entertainment (International) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2048,
     "ticker": "DSKULKARNI",
     "name": "DS Kulkarni Developers Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2049,
     "ticker": "EASTSUGIND",
     "name": "Eastern Sug & Inds Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2050,
     "ticker": "EASUNREYRL",
     "name": "Easun Reyrolle Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2051,
     "ticker": "EMCO",
     "name": "Emco Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2052,
     "ticker": "EON",
     "name": "Eon Electric Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2053,
     "ticker": "EUROCERA",
     "name": "Euro Ceramics Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2054,
     "ticker": "EUROMULTI",
     "name": "Euro Multivision Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2055,
     "ticker": "FEDDERELEC",
     "name": "Fedders Electric and Engineering Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2056,
     "ticker": "FIVECORE",
     "name": "Five Core Electronics Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2057,
     "ticker": "GAMMONIND",
     "name": "Gammon India Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2058,
     "ticker": "GANGOTRI",
     "name": "Gangotri Textiles Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2059,
     "ticker": "GBGLOBAL",
     "name": "GB Global Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2060,
     "ticker": "GFSTEELS",
     "name": "Grand Foundry Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2061,
     "ticker": "GITANJALI",
     "name": "Gitanjali Gems Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2062,
     "ticker": "HINDNATGLS",
     "name": "Hindusthan National Glass & Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2063,
     "ticker": "ICSA",
     "name": "ICSA (India) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2064,
     "ticker": "INDOSOLAR",
     "name": "Indosolar Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2065,
     "ticker": "IVRCLINFRA",
     "name": "IVRCL Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2066,
     "ticker": "JAINSTUDIO",
     "name": "Jain Studios Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2067,
     "ticker": "JBFIND",
     "name": "JBF Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2068,
     "ticker": "JIKIND",
     "name": "JIK Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2069,
     "ticker": "JINDCOT",
     "name": "Jindal Cotex Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2070,
     "ticker": "JMTAUTOLTD",
     "name": "JMT Auto Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2071,
     "ticker": "JPINFRATEC",
     "name": "Jaypee Infratech Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2072,
     "ticker": "KEERTI",
     "name": "Keerti Knowledge And Skills Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2073,
     "ticker": "KGL",
     "name": "Karuturi Global Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2074,
     "ticker": "KSERASERA",
     "name": "KSS Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2075,
     "ticker": "KSK",
     "name": "KSK Energy Ventures Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2076,
     "ticker": "LAKSHMIEFL",
     "name": "Lakshmi Energy and Foods Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2077,
     "ticker": "LEEL",
     "name": "LEEL Electricals Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2078,
     "ticker": "MANPASAND",
     "name": "Manpasand Beverages Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2079,
     "ticker": "MBECL",
     "name": "Mcnally Bharat Engineering Company Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2080,
     "ticker": "MCDHOLDING",
     "name": "McDowell Holdings Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2081,
     "ticker": "MERCATOR",
     "name": "Mercator Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2082,
     "ticker": "METKORE",
     "name": "Metkore Alloys & Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2083,
     "ticker": "MODTHREAD",
     "name": "Modern Thread Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2084,
     "ticker": "MOHOTAIND",
     "name": "Mohota Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2085,
     "ticker": "MVL",
     "name": "MVL Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2086,
     "ticker": "NAKODA",
     "name": "Nakoda Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2087,
     "ticker": "NITINFIRE",
     "name": "Nitin Fire Protection Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2088,
     "ticker": "NTL",
     "name": "Neueon Towers Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2089,
     "ticker": "NUTEK",
     "name": "Nu Tek India Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2090,
     "ticker": "OISL",
     "name": "OCL Iron and Steel Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2091,
     "ticker": "OMKARCHEM",
     "name": "Omkar Speciality Chemicals Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2092,
     "ticker": "OPAL",
     "name": "Opal Luxury Time Products Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2093,
     "ticker": "OPTOCIRCUI",
     "name": "Opto Circuits (India) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2094,
     "ticker": "ORTEL",
     "name": "Ortel Communications Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2095,
     "ticker": "PDPL",
     "name": "Parenteral Drugs (India) Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2096,
     "ticker": "PINCON",
     "name": "Pincon Spirit Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2097,
     "ticker": "PRATIBHA",
     "name": "Pratibha Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2098,
     "ticker": "PRUDMOULI",
     "name": "Prudential Sugar Corporation Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2099,
     "ticker": "PSL",
     "name": "PSL Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2100,
     "ticker": "PUNJLLOYD",
     "name": "Punj Lloyd Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2101,
     "ticker": "QUINTEGRA",
     "name": "Quintegra Solutions Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2102,
     "ticker": "RADAAN",
     "name": "Radaan Mediaworks India Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2103,
     "ticker": "RAINBOWPAP",
     "name": "Rainbow Papers Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2104,
     "ticker": "RAJVIR",
     "name": "Rajvir Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2105,
     "ticker": "RMMIL",
     "name": "Resurgere Mines & Minerals Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2106,
     "ticker": "RUSHABEAR",
     "name": "Rushabh Precision Bearings Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2107,
     "ticker": "S&SPOWER",
     "name": "S&S Power Switchgears Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2108,
     "ticker": "SATHAISPAT",
     "name": "Sathavahana Ispat Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2109,
     "ticker": "SBIHOMEFIN",
     "name": "SBI Home Finance Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2110,
     "ticker": "SHARONBIO",
     "name": "Sharon Bio-Medicine Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2111,
     "ticker": "SHIRPUR-G",
     "name": "Shirpur Gold Refinery Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2112,
     "ticker": "SICAL",
     "name": "Sical Logistics Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2113,
     "ticker": "SIIL",
     "name": "Supreme (India) Impex Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2114,
     "ticker": "SKIL",
     "name": "Skil Infrastructure Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2115,
     "ticker": "SONISOYA",
     "name": "Soni Soya Products Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2116,
     "ticker": "SPYL",
     "name": "Shekhawati Poly-Yarn Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2117,
     "ticker": "SREINFRA",
     "name": "SREI Infrastructure Finance Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2118,
     "ticker": "STAMPEDE",
     "name": "Stampede Capital Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2119,
     "ticker": "TALWALKARS",
     "name": "Talwalkars Better Value Fitness Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2120,
     "ticker": "TALWGYM",
     "name": "Talwalkars Healthclubs Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2121,
     "ticker": "TCIFINANCE",
     "name": "TCI Finance Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2122,
     "ticker": "TECHNOFAB",
     "name": "Technofab Engineering Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2123,
     "ticker": "THIRUSUGAR",
     "name": "Thiru Arooran Sugars Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2124,
     "ticker": "TULSI",
     "name": "Tulsi Extrusions Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2125,
     "ticker": "UNIPLY",
     "name": "Uniply Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2126,
     "ticker": "UNITY",
     "name": "Unity Infraprojects Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2127,
     "ticker": "UNIVAFOODS",
     "name": "Univa Foods Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2128,
     "ticker": "USK",
     "name": "Udayshivakumar Infra Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2129,
     "ticker": "VALECHAENG",
     "name": "Valecha Engineering Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2130,
     "ticker": "VALUEIND",
     "name": "Value Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2131,
     "ticker": "VICEROY",
     "name": "Viceroy Hotels Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2132,
     "ticker": "VIDEOIND",
     "name": "Videocon Industries Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2133,
     "ticker": "VIKASPROP",
     "name": "Vikas Proppant & Granite Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2134,
     "ticker": "VISUINTL",
     "name": "Visu International Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2135,
     "ticker": "VIVIMEDLAB",
     "name": "Vivimed Labs Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2136,
     "ticker": "WINSOME",
     "name": "Winsome Yarns Limited",
     "market": "*Not available for trading as on March 31, 2023"
    },
    {
     "number": 2137,
     "ticker": "ZICOM",
     "name": "Zicom Electronic Security Systems Limited",
     "market": "*Not available for trading as on March 31, 2023"
    }
   ]

export default stockList;