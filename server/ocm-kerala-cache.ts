// server/ocm-kerala-cache.ts
// Verified OpenChargeMap Kerala POIs from official OpenChargeMap Open-Data Archive

export const OCM_KERALA_FALLBACK_POIS: any[] = [
  {
    "_id": {
      "$oid": "61120fa3b3a48f0c59c90416"
    },
    "ID": 129323,
    "UUID": "B09CC7CA-7001-4AA8-9F98-9849E044D25D",
    "ParentChargePointID": null,
    "DataProviderID": 1,
    "DataProvidersReference": null,
    "OperatorID": 3363,
    "OperatorsReference": null,
    "UsageTypeID": 3,
    "UsageCost": null,
    "AddressInfo": {
      "ID": 129669,
      "Title": "Kailash Bhavan",
      "AddressLine1": "Kailash Bhavan",
      "AddressLine2": "Amritapuri",
      "Town": "Clappana",
      "StateOrProvince": "Kerala",
      "Postcode": "690525",
      "CountryID": 106,
      "Country": {
        "ID": 106,
        "Title": "India",
        "ISOCode": "IN",
        "ContinentCode": "AS"
      },
      "Latitude": 9.08818839762424,
      "Longitude": 76.485887744861,
      "ContactTelephone1": null,
      "ContactTelephone2": null,
      "ContactEmail": "info.midgardelectric@gmail.com",
      "AccessComments": null,
      "RelatedURL": "https://www.midgardelectric.com/",
      "Distance": null,
      "DistanceUnit": 0,
      "GeneralComments": null
    },
    "Connections": [
      {
        "ID": 180994,
        "ConnectionTypeID": 16,
        "ConnectionType": {
          "ID": 16,
          "Title": "CEE 3 Pin",
          "FormalName": null,
          "IsDiscontinued": false,
          "IsObsolete": false
        },
        "Reference": null,
        "StatusTypeID": 50,
        "StatusType": {
          "ID": 50,
          "Title": "Operational",
          "IsOperational": true,
          "IsUserSelectable": true
        },
        "LevelID": 2,
        "Level": {
          "ID": 2,
          "Title": "Level 2 : Medium (Over 2kW)",
          "Comments": "Over 2 kW, usually non-domestic socket type",
          "IsFastChargeCapable": false
        },
        "Amps": 16,
        "Voltage": 240,
        "PowerKW": 3.3,
        "CurrentTypeID": 10,
        "CurrentType": {
          "ID": 10,
          "Title": "AC (Single-Phase)",
          "Description": "Alternating Current - Single Phase"
        },
        "Quantity": 3,
        "Comments": null
      }
    ],
    "NumberOfPoints": 3,
    "GeneralComments": null,
    "DatePlanned": null,
    "DateLastConfirmed": null,
    "StatusTypeID": 50,
    "DateLastStatusUpdate": {
      "$date": "2019-07-22T13:49:00Z"
    },
    "MetadataValues": null,
    "DataQualityLevel": 1,
    "DateCreated": {
      "$date": "2019-07-17T11:08:00Z"
    },
    "SubmissionStatusTypeID": 200,
    "AddressCleaningRequired": false,
    "DataProvider": {
      "ID": 1,
      "Title": "Open Charge Map Contributors",
      "WebsiteURL": "http://openchargemap.org",
      "Comments": null,
      "DataProviderStatusType": {
        "ID": 1,
        "Title": "Manual Data Entry",
        "IsProviderEnabled": true
      },
      "IsRestrictedEdit": false,
      "IsOpenDataLicensed": true,
      "IsApprovedImport": true,
      "License": "Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
      "DateLastImported": null
    },
    "OperatorInfo": {
      "ID": 3363,
      "Title": "Midgard Electric",
      "WebsiteURL": "https://www.midgardelectric.com/",
      "Comments": "Bangalore",
      "PhonePrimaryContact": null,
      "PhoneSecondaryContact": null,
      "IsPrivateIndividual": false,
      "AddressInfo": null,
      "BookingURL": null,
      "ContactEmail": "info.midgardelectric@gmail.com",
      "FaultReportEmail": null,
      "IsRestrictedEdit": false
    },
    "UsageType": {
      "ID": 3,
      "Title": "Privately Owned - Notice Required",
      "IsPayAtLocation": null,
      "IsMembershipRequired": null,
      "IsAccessKeyRequired": null
    },
    "StatusType": {
      "ID": 50,
      "Title": "Operational",
      "IsOperational": true,
      "IsUserSelectable": true
    },
    "SubmissionStatus": {
      "ID": 200,
      "Title": "Submission Published",
      "IsLive": true
    },
    "UserComments": null,
    "PercentageSimilarity": null,
    "MediaItems": [
      {
        "ID": 18938,
        "ChargePointID": 129323,
        "ItemURL": "https://s3-ap-southeast-2.amazonaws.com/openchargemap/images/IN/OCM129323/OCM-129323.orig.2019071711151940.jpg",
        "ItemThumbnailURL": "https://s3-ap-southeast-2.amazonaws.com/openchargemap/images/IN/OCM129323/OCM-129323.thmb.2019071711151940.jpg",
        "Comment": "",
        "IsEnabled": true,
        "IsVideo": false,
        "IsFeaturedItem": false,
        "IsExternalResource": false,
        "MetadataValue": null,
        "User": {
          "ID": 21625,
          "IdentityProvider": null,
          "Identifier": null,
          "CurrentSessionToken": null,
          "Username": "Midgard Electric",
          "Profile": null,
          "Location": null,
          "WebsiteURL": null,
          "ReputationPoints": 2,
          "Permissions": null,
          "PermissionsRequested": null,
          "DateCreated": null,
          "DateLastLogin": null,
          "IsProfilePublic": null,
          "IsEmergencyChargingProvider": null,
          "IsPublicChargingProvider": null,
          "Latitude": null,
          "Longitude": null,
          "EmailAddress": null,
          "EmailHash": null,
          "ProfileImageURL": "https://www.gravatar.com/avatar/95a9ef74bed68d9e369831678382e9c6?s=80&d=robohash",
          "IsCurrentSessionTokenValid": null,
          "APIKey": null,
          "SyncedSettings": null
        },
        "DateCreated": {
          "$date": "2019-07-17T11:16:00Z"
        }
      }
    ],
    "LevelOfDetail": null,
    "Chargers": null,
    "MetadataTags": null,
    "SpatialPosition": {
      "type": "Point",
      "coordinates": [
        76.485887744861,
        9.08818839762424
      ]
    }
  },
  {
    "_id": {
      "$oid": "61120fa3b3a48f0c59c90a46"
    },
    "ID": 131607,
    "UUID": "CCF45709-1030-46CB-BA1B-29BB9C4B986F",
    "ParentChargePointID": null,
    "DataProviderID": 1,
    "DataProvidersReference": null,
    "OperatorID": 1,
    "OperatorsReference": null,
    "UsageTypeID": 6,
    "UsageCost": null,
    "AddressInfo": {
      "ID": 131953,
      "Title": "JRD Realtorss ",
      "AddressLine1": "P-1 Kovaipudur, Near Shanthi Ashram",
      "AddressLine2": null,
      "Town": "Coimbatore",
      "StateOrProvince": "Tamil Nadu",
      "Postcode": "641042",
      "CountryID": 106,
      "Country": {
        "ID": 106,
        "Title": "India",
        "ISOCode": "IN",
        "ContinentCode": "AS"
      },
      "Latitude": 11.0018115,
      "Longitude": 76.9628425,
      "ContactTelephone1": null,
      "ContactTelephone2": null,
      "ContactEmail": "Jrdrealtorss@gmail.com",
      "AccessComments": null,
      "RelatedURL": "https://jrdrealtorss.com/",
      "Distance": null,
      "DistanceUnit": 0,
      "GeneralComments": null
    },
    "Connections": [],
    "NumberOfPoints": 1,
    "GeneralComments": null,
    "DatePlanned": null,
    "DateLastConfirmed": null,
    "StatusTypeID": 50,
    "DateLastStatusUpdate": {
      "$date": "2019-09-14T09:23:00Z"
    },
    "MetadataValues": null,
    "DataQualityLevel": 1,
    "DateCreated": {
      "$date": "2019-09-10T07:14:00Z"
    },
    "SubmissionStatusTypeID": 250,
    "AddressCleaningRequired": false,
    "DataProvider": {
      "ID": 1,
      "Title": "Open Charge Map Contributors",
      "WebsiteURL": "http://openchargemap.org",
      "Comments": null,
      "DataProviderStatusType": {
        "ID": 1,
        "Title": "Manual Data Entry",
        "IsProviderEnabled": true
      },
      "IsRestrictedEdit": false,
      "IsOpenDataLicensed": true,
      "IsApprovedImport": true,
      "License": "Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
      "DateLastImported": null
    },
    "OperatorInfo": {
      "ID": 1,
      "Title": "(Unknown Operator)",
      "WebsiteURL": null,
      "Comments": null,
      "PhonePrimaryContact": null,
      "PhoneSecondaryContact": null,
      "IsPrivateIndividual": null,
      "AddressInfo": null,
      "BookingURL": null,
      "ContactEmail": null,
      "FaultReportEmail": null,
      "IsRestrictedEdit": null
    },
    "UsageType": {
      "ID": 6,
      "Title": "Private - For Staff, Visitors or Customers",
      "IsPayAtLocation": false,
      "IsMembershipRequired": false,
      "IsAccessKeyRequired": false
    },
    "StatusType": {
      "ID": 50,
      "Title": "Operational",
      "IsOperational": true,
      "IsUserSelectable": true
    },
    "SubmissionStatus": {
      "ID": 250,
      "Title": "Submission Rejected - Incomplete",
      "IsLive": false
    },
    "UserComments": null,
    "PercentageSimilarity": null,
    "MediaItems": null,
    "LevelOfDetail": null,
    "Chargers": null,
    "MetadataTags": null,
    "SpatialPosition": {
      "type": "Point",
      "coordinates": [
        76.9628425,
        11.0018115
      ]
    }
  },
  {
    "_id": {
      "$oid": "61120ff2b3a48f0c59c99437"
    },
    "ID": 174116,
    "UUID": "E8C2B9BC-B453-4F89-9979-CF9B51B21607",
    "ParentChargePointID": null,
    "DataProviderID": 1,
    "DataProvidersReference": null,
    "OperatorID": 1,
    "OperatorsReference": null,
    "UsageTypeID": 6,
    "UsageCost": null,
    "AddressInfo": {
      "ID": 174475,
      "Title": "Albert Victor Road",
      "AddressLine1": "Albert Victor Road",
      "AddressLine2": "Nazarbad",
      "Town": "Mysuru",
      "StateOrProvince": "Mysuru taluk",
      "Postcode": "570001",
      "CountryID": 106,
      "Country": {
        "ID": 106,
        "Title": "India",
        "ISOCode": "IN",
        "ContinentCode": "AS"
      },
      "Latitude": 12.305024242869237,
      "Longitude": 76.65386978261176,
      "ContactTelephone1": null,
      "ContactTelephone2": null,
      "ContactEmail": null,
      "AccessComments": null,
      "RelatedURL": null,
      "Distance": null,
      "DistanceUnit": 0,
      "GeneralComments": null
    },
    "Connections": [],
    "NumberOfPoints": 1,
    "GeneralComments": null,
    "DatePlanned": null,
    "DateLastConfirmed": null,
    "StatusTypeID": 50,
    "DateLastStatusUpdate": {
      "$date": "2021-03-15T16:10:00Z"
    },
    "MetadataValues": null,
    "DataQualityLevel": 1,
    "DateCreated": {
      "$date": "2021-03-15T15:28:00Z"
    },
    "SubmissionStatusTypeID": 250,
    "AddressCleaningRequired": false,
    "DataProvider": {
      "ID": 1,
      "Title": "Open Charge Map Contributors",
      "WebsiteURL": "http://openchargemap.org",
      "Comments": null,
      "DataProviderStatusType": {
        "ID": 1,
        "Title": "Manual Data Entry",
        "IsProviderEnabled": true
      },
      "IsRestrictedEdit": false,
      "IsOpenDataLicensed": true,
      "IsApprovedImport": true,
      "License": "Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
      "DateLastImported": null
    },
    "OperatorInfo": {
      "ID": 1,
      "Title": "(Unknown Operator)",
      "WebsiteURL": null,
      "Comments": null,
      "PhonePrimaryContact": null,
      "PhoneSecondaryContact": null,
      "IsPrivateIndividual": null,
      "AddressInfo": null,
      "BookingURL": null,
      "ContactEmail": null,
      "FaultReportEmail": null,
      "IsRestrictedEdit": null
    },
    "UsageType": {
      "ID": 6,
      "Title": "Private - For Staff, Visitors or Customers",
      "IsPayAtLocation": false,
      "IsMembershipRequired": false,
      "IsAccessKeyRequired": false
    },
    "StatusType": {
      "ID": 50,
      "Title": "Operational",
      "IsOperational": true,
      "IsUserSelectable": true
    },
    "SubmissionStatus": {
      "ID": 250,
      "Title": "Submission Rejected - Incomplete",
      "IsLive": false
    },
    "UserComments": null,
    "PercentageSimilarity": null,
    "MediaItems": null,
    "LevelOfDetail": null,
    "Chargers": null,
    "MetadataTags": null,
    "SpatialPosition": {
      "type": "Point",
      "coordinates": [
        76.65386978261176,
        12.305024242869237
      ]
    }
  }
];
