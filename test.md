## Introduction
Managing the configuration of Azure VMs is very important to ensure that they are in a consistent and secure state. PowerShell Desired State Configuration (DSC) provides the capability to pre-configure rules that can be used to check the configuration state of a VM and automatically remediate any configuration drift. By using Azure Automation, these DSC rules can be centrally managed and applied to VMs in Azure


## Overview
In this exercise, a PowerShell Desired State Configuration (DSC) file is created to check if a VM has IIS installed. An Azure Automation Account is also created. An existing VM is then onboarded into Azure Automation. The DSC is added to Azure Automation to run the check and preform remediation to install IIS if it is missing.

